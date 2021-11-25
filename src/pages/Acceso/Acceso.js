import React, { useEffect, useRef, useState } from "react";
import { useAcceso } from "../../Hooks/useAcceso";
import { useComponent } from "../../Hooks/useComponent";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./acceso.scss";

const Acceso = () => {
  const { dataAcceso, loadingAcceso, errorAcceso } = useAcceso();
  const { data, loading, isError, findComponent, updateComponent } = useComponent();

  const [listAccess, setListAccess] = useState({});
  const refMount = useRef(null)

  useEffect(() => {
    findComponent("null");
  }, [findComponent]);

  useEffect(() => {
    return () => {
      refMount.current = null;
    }
  }, [])

  useEffect(() => {
    console.log("estado ref:", refMount.current)
    if(!refMount.current){
      if (dataAcceso && data){
        const listado = {}, list = {};
        dataAcceso.forEach(e => { listado[e.id] = {...e}});
        console.table(data)
        list['0'] =  {id: "empty", descripcion : "Componentes", items : data }

        setListAccess({ ...list, ...listado});
        refMount.current = 'mount';
      }
    }
  }, [dataAcceso, data]);
  
  
  const onDragMove = (result, listAccess, setListAccess) => {
    if (!result.destination) return;
    const { source, destination } = result;
    //console.log({ source, destination, listAccess, setListAccess } )
 
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = listAccess[source.droppableId];
        const destColumn = listAccess[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        updateItemAccess(destColumn.id, removed.id)
        setListAccess(
          {
            ...listAccess,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems
            }
          }
        );
    } else {
        const column = listAccess[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setListAccess({
            ...listAccess,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  }

  const updateItemAccess = (idAcceso, idItem) =>{
    //console.log("update", {idAcceso, idItem})
    if(idAcceso === "empty") idAcceso = null;
    updateComponent({idAcceso, idItem});
  }
  //https://codesandbox.io/s/angry-agnesi-bjcsy?file=/src/App.js:2077-2091
  //https://github.com/atlassian/react-beautiful-dnd
  //https://codesandbox.io/examples/package/react-beautiful-dnd
  return (
    <DragDropContext
      onDragEnd={(result) => onDragMove(result, listAccess, setListAccess)}
    >
      <div className="content_acceso">
        <div className="list_access">
          {!loadingAcceso && !errorAcceso && !loading && !isError &&
            Object.entries(listAccess).map(([columnId, column], index) => (
                <div key={columnId} className="list_access_card">
                <p>{column.descripcion}</p>
                <Droppable droppableId={`${columnId}`}>
                  {(droppableProvided, snapshot) => (
                    <div className="list_access_body" 
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                    style={{background: snapshot.isDraggingOver && "lightblue"}}
                    key={columnId} 
                    >
                        {column.items.map((c, i) => (
                            <Draggable
                            key={`${c.nombre}-${c.id}`}
                            index={i}
                            draggableId={`${c.descripcion}-${c.id}`}
                            >
                            {(draggableProvided) => (
                                <div
                                {...draggableProvided.draggableProps}
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.dragHandleProps}
                                >
                                    <div className="list_access_items">
                                      <div>
                                        <p>Input: {c.io}</p>
                                        <p>{c.nombre}</p>
                                      </div>
                                      <hr/>
                                      <span>{c.descripcion}</span>
                                    </div>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Acceso;
