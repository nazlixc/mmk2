const osc = new OSC(); // defaults to WebsocketClientPlugin
const regex = /[^a-zA-Z_]/g;
let gestureClean;

try {
  osc.open({ host: "127.0.0.1", port: 9912 });
  const error = osc.status;
  osc.on("/bodies", (message) => {
    let rawArgs = message.args.toString().split(",");
    let gestureSplit = rawArgs[4].split(":");
    gestureClean = gestureSplit[1].replace(regex, "");
    if (gestureClean != "") {
      console.log(gestureClean);
    }
  });
} catch (error) {
  console.error(error);
}
