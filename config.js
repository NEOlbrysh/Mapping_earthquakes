// API key
const API_KEY = "pk.eyJ1IjoibmVvbGJyeXNoIiwiYSI6ImNsNXZhbW1wcTAweXozYm1zM3I0NDE5bHQifQ.gYDE2rrbS0_tL02ItZLYgQ";

// Create the map object with a center and zoom level-->
let map = L.map('mapid').setView([40.7, -94.5], 4)

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });