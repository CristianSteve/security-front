import React, { useEffect, useState } from "react";
import { useAcceso } from "../../Hooks/useAcceso";
import { useComponent } from "../../Hooks/useComponent";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./acceso.scss";

const Acceso = () => {
  const { dataAcceso, loadingAcceso, errorAcceso } = useAcceso();
  const { data, loading, isError } = useComponent();

  const [listAccess, setListAccess] = useState({});

  useEffect(() => {
    if (dataAcceso && data){
        const listado = {}, list = {};
        dataAcceso.forEach(e => { listado[e.id] = {...e}});
        list.empty =  {id: "empty", descripcion : "Componentes", items : data }

        setListAccess({ ...list, ...listado});
    }
  }, [dataAcceso, data]);


  const onDragMove = (result, listAccess, setListAccess) => {
    if (!result.destination) return;
    const { source, destination } = result;
    console.log({ source, destination, listAccess, setListAccess } )
 
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = listAccess[source.droppableId];
        const destColumn = listAccess[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        console.log({sourceColumn , destColumn, sourceItems, destItems});
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
                      key={columnId} 
                      {...droppableProvided.droppableProps}
                      ref={droppableProvided.innerRef}
                      style={{background: snapshot.isDraggingOver && "lightblue"}}
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
                                        <p>{c.descripcion}</p>
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
       {/*  <div className="list_components">
          <Droppable droppableId="components">
            {(droppableProvided) => (
              <div
                className="list_components_card"
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                <span>Componentes</span>
                {!loading &&
                  !isError &&
                  listCompo.map((c, i) => (
                    <Draggable key={c.id} index={i} draggableId={`ele-${c.id}`}>
                      {(draggableProvided) => (
                        <div
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                        >
                          <div className="list_components_body">
                            <span>{c.nombre}</span>
                            <p>{c.descripcion}</p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </div> */}
      </div>
    </DragDropContext>
  );
};

export default Acceso;
