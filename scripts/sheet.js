console.log("Hello world!");

Hooks.on("init", function() {
    console.log("runs when software begins initialization")
});

Hooks.on("ready", function() {
    console.log("runs once core init is ready and game data is available.")
});