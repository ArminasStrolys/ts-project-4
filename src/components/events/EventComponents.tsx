import React from 'react';

const EventComponents: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={handleChange} placeholder={'Event catcher'} />
      <div draggable onDragStart={handleDrag}>
        Drag me
      </div>
    </div>
  );
};
export default EventComponents;
