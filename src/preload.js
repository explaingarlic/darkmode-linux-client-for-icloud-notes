const ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('new-note', (event, arg) => {
    console.info(`received a message from main process ${event}`)
    // $('div.compose.cw-button').click();
});

const insertCSS = async () => {
    alert("it loaded!")
    const css = `
    .cw-collection-view {
      background-color: black !important;
      color:white !important;
  }
  .cloudos-toolbar {
      background-color: #353537 !important;
      border-bottom: none !important;
  }
  
  svg.apple-icloud-logo {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iMzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJhcHBsZS1pY2xvdWQtbG9nbyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjQURBREFGIj48cGF0aCBkPSJNNzcuMDA1IDIzLjIxNWMxLjU2OCAwIDIuNzY3LS43NzkgMy4zODItMi4wNmguMDYxVjIzSDgzVjguMjA0aC0yLjU1MnY1Ljc5M2gtLjA2MWMtLjYxNS0xLjMwMi0xLjg1NS0yLjA5Mi0zLjM5Mi0yLjA5Mi0yLjcyNiAwLTQuNDc5IDIuMTQzLTQuNDc5IDUuNjV2LjAxYzAgMy40OTcgMS43NDIgNS42NSA0LjQ4OSA1LjY1Wm0uNzY4LTIuMTUzYy0xLjY0IDAtMi42NTQtMS4zMzMtMi42NTQtMy40OTd2LS4wMWMwLTIuMTYzIDEuMDI1LTMuNDk2IDIuNjU0LTMuNDk2IDEuNTY4IDAgMi42NzUgMS4zNzQgMi42NzUgMy40OTZ2LjAxYzAgMi4xMzMtMS4wOTYgMy40OTctMi42NzUgMy40OTdabS0xMy4wNSAyLjE1M2MxLjY0IDAgMi43NTctLjc1OCAzLjMyLTEuOTE3aC4wNTJWMjNoMi41NTJWMTIuMTNoLTIuNTUydjYuMjk3YzAgMS41NzktLjkzMyAyLjYzNS0yLjM5OCAyLjYzNS0xLjQ1NSAwLTIuMTczLS44NzItMi4xNzMtMi40MXYtNi41MjFoLTIuNTUydjcuMDI0YzAgMi41MjIgMS4zNjMgNC4wNiAzLjc1MSA0LjA2Wm0tMTAuODI2IDBjMy4xODcgMCA1LjI1Ny0yLjEyMiA1LjI1Ny01LjY1di0uMDJjMC0zLjUwNy0yLjEtNS42NC01LjI2Ny01LjY0LTMuMTU3IDAtNS4yNDggMi4xNTQtNS4yNDggNS42NHYuMDJjMCAzLjUxOCAyLjA2IDUuNjUgNS4yNTggNS42NVptLjAxLTIuMDZjLTEuNjMgMC0yLjY2NS0xLjMwMy0yLjY2NS0zLjU5di0uMDJjMC0yLjI1NiAxLjA1Ni0zLjU2OCAyLjY0NS0zLjU2OCAxLjYxOSAwIDIuNjY0IDEuMzAyIDIuNjY0IDMuNTY4di4wMmMwIDIuMjc3LTEuMDM1IDMuNTktMi42NDQgMy41OVpNNDQuMTM3IDIzaDIuNTVWOC4yMDRoLTIuNTVWMjNabS04LjM1Ny4yNTZjMy40MDIgMCA1LjkxMy0yLjEwMiA2LjI5Mi01LjEzN2wuMDItLjEwMkgzOS41bC0uMDMxLjEwMmMtLjQ4MiAxLjgyNS0xLjgwNCAyLjg0LTMuNjkgMi44NC0yLjU3MiAwLTQuMjMyLTIuMDctNC4yMzItNS4zNjJ2LS4wMWMwLTMuMjgyIDEuNjUtNS4zNDMgNC4yMzMtNS4zNDMgMS45MjYgMCAzLjIyOCAxLjA1NiAzLjY1OCAyLjc0OGwuMDUxLjE5NWgyLjU5M2wtLjAxLS4xMDNjLS4zOS0zLjAxNC0yLjg5LTUuMTM3LTYuMjkyLTUuMTM3LTQuMjQzIDAtNi45MzggMi45MTItNi45MzggNy42NHYuMDFjMCA0LjcyNyAyLjY4NSA3LjY2IDYuOTM4IDcuNjZaTTI1LjQyNCAxMC41NzJhMS40IDEuNCAwIDEgMCAwLTIuOGMtLjc5OSAwLTEuNDI0LjYyNi0xLjQyNCAxLjQwNiAwIC43NTkuNjI1IDEuMzk0IDEuNDI0IDEuMzk0Wk0yNC4xNDQgMjNoMi41NTFWMTIuMTNoLTIuNTUyVjIzWiIgb3BhY2l0eT0iLjYzIj48L3BhdGg+PHBhdGggZD0iTTEyLjkgNy41OThjLjYwOC0uNzM3IDEuMDQtMS43NCAxLjA0LTIuNzU1IDAtLjE0LS4wMTMtLjI4LS4wMzgtLjM5NC0uOTkuMDM4LTIuMTgzLjY2LTIuODkzIDEuNDk4LS41NTkuNjM1LTEuMDc5IDEuNjUtMS4wNzkgMi42NjYgMCAuMTUzLjAyNi4zMDUuMDM4LjM1Ni4wNjQuMDEyLjE2NS4wMjUuMjY3LjAyNS44ODggMCAyLjAwNC0uNTk3IDIuNjY0LTEuMzk2Wm0uNjk3IDEuNjEyYy0xLjQ4NCAwLTIuNjkuOTAxLTMuNDY0LjkwMS0uODI1IDAtMS45MDMtLjg1LTMuMTk3LS44NUM0LjQ4NiA5LjI2IDIgMTEuMjkyIDIgMTUuMTEzYzAgMi4zODcuOTE0IDQuOSAyLjA1NiA2LjUyNi45NzcgMS4zNyAxLjgyNyAyLjUgMy4wNTcgMi41IDEuMjE4IDAgMS43NTEtLjgxMiAzLjI2MS0uODEyIDEuNTM2IDAgMS44NzguNzg3IDMuMjIzLjc4NyAxLjMzMiAwIDIuMjItMS4yMTggMy4wNTgtMi40MjUuOTM5LTEuMzgzIDEuMzMyLTIuNzI5IDEuMzQ1LTIuNzkzLS4wNzYtLjAyNS0yLjYyNi0xLjA2Ni0yLjYyNi0zLjk4NiAwLTIuNTI2IDIuMDA0LTMuNjU2IDIuMTE4LTMuNzQ1LTEuMzItMS45MDQtMy4zMzctMS45NTUtMy44OTUtMS45NTVaIiBvcGFjaXR5PSIuNTY5Ij48L3BhdGg+PC9nPjwvc3ZnPg==") !important;
      content: none !important;
  }  
  
  .list-item.is-selected {
      background-color: rgba(120,120,128,.95) !important;
  }
  
  .notes-list-focused {
      background-color:rgba(255,223,18, 0.75) !important;
  }
  
  .note-list-item-folder-title {
      color: rgba(220,220,215,0.75) !important;
  }
  
  .note-list-view {
      background-color: #323237 !important;
  }
  
  .split-resize-handle {
      background-color: darkblue !important;
  }
    `;
    const style = document.createElement("style");
    style.type = "text/css";
    document.head.appendChild(style);
    alert(style)
    style.appendChild(document.createTextNode(css));
};

if(document.readyState !== "loading") {
    insertCSS();
}
else {

    window.addEventListener("DOMContentLoaded", insertCSS);
}