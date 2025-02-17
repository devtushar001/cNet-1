import React, { useState, useRef, useEffect } from 'react';
import './ToolsStyle/whiteboard.css';

const whiteboard = () => {
  const canvasRefs = useRef([]);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const [pages, setPages] = useState([[]]); // Array to store pages (each page stores a list of drawing actions)
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineColor, setLineColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  
  // Start drawing (on mouse/touch)
  const startDrawing = (e) => {
    const canvas = canvasRefs.current[currentPage];
    const context = canvas.getContext('2d');
    context.beginPath();

    const { x, y } = getCoordinates(e);
    context.moveTo(x, y);
    setIsDrawing(true);

    // Store the start point of the drawing in the current page's history
    const newPages = [...pages];
    newPages[currentPage].push({ type: 'start', x, y });
    setPages(newPages);
  };

  // Stop drawing
  const stopDrawing = () => {
    setIsDrawing(false);

    // Store the end point of the drawing in the current page's history
    const newPages = [...pages];
    newPages[currentPage].push({ type: 'stop' });
    setPages(newPages);
  };

  // Draw on canvas (on mouse/touch)
  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRefs.current[currentPage];
    const context = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    context.lineWidth = lineWidth;
    context.lineCap = 'round';
    context.strokeStyle = lineColor;
    context.lineTo(x, y);
    context.stroke();

    // Store the drawing action on the current page's history
    const newPages = [...pages];
    newPages[currentPage].push({ type: 'draw', x, y });
    setPages(newPages);
  };

  // Get mouse/touch coordinates
  const getCoordinates = (e) => {
    const canvas = canvasRefs.current[currentPage];
    const rect = canvas.getBoundingClientRect();
    let x, y;

    if (e.touches) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    return { x, y };
  };

  // Clear the current page
  const clearCanvas = () => {
    const canvas = canvasRefs.current[currentPage];
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Clear the drawing history for the current page
    const newPages = [...pages];
    newPages[currentPage] = [];
    setPages(newPages);
  };

  // Add a new page
  const addNewPage = () => {
    const newPageIndex = pages.length;
    setPages([...pages, []]); // Add a new empty page (history)
    setCurrentPage(newPageIndex); // Switch to the new page immediately
  };

  // Save the current page as an image (PNG)
  const saveCanvas = () => {
    const canvas = canvasRefs.current[currentPage];
    const imageURL = canvas.toDataURL('image/png');

    // Create a temporary link to trigger the download
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = `whiteboard-page-${currentPage + 1}.png`;
    link.click();
  };

  // Switch to the next page
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1); // Move to the next page
    }
  };

  // Switch to the previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1); // Move to the previous page
    }
  };

  // Draw saved content for the current page (restore from history)
  useEffect(() => {
    const canvas = canvasRefs.current[currentPage];
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the current canvas

    const pageHistory = pages[currentPage];

    pageHistory.forEach((action) => {
      if (action.type === 'start') {
        context.beginPath();
        context.moveTo(action.x, action.y);
      } else if (action.type === 'draw') {
        context.lineTo(action.x, action.y);
        context.stroke();
      } else if (action.type === 'stop') {
        context.closePath();
      }
    });
  }, [currentPage, pages]);

  return (
    <div className="whiteboard-container">
      <div className="controls">
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={saveCanvas}>Save Page</button>
        <button onClick={addNewPage}>Add New Page</button>
        <button onClick={prevPage} disabled={currentPage === 0}>Previous Page</button>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>Next Page</button>
        <label>
          Line Color:
          <input 
            type="color" 
            value={lineColor} 
            onChange={(e) => setLineColor(e.target.value)} 
          />
        </label>
        <label>
          Line Width:
          <input 
            type="number" 
            value={lineWidth} 
            onChange={(e) => setLineWidth(Number(e.target.value))} 
            min="1" max="10" 
          />
        </label>
      </div>

      <div className="canvas-container">
        <canvas
          ref={(el) => (canvasRefs.current[currentPage] = el)}
          width={1350}
          height={500}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
          style={{ border: '1px solid rgb(154, 154, 154)', cursor: 'crosshair' }}
        />
      </div>
    </div>
  );
};

export default whiteboard