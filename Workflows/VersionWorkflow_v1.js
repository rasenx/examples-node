"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("VersionWorkflow_v1", {
  handle: function*() {
    this.run.task("TaskA");
    this.run.task("TaskB");
    yield this.run.task("TaskC");
    yield this.wait.event("MyEvent").forever();
  },
  onEvent: function*(_name, _data) {
    console.log("Event received for Version 1");
  }
});
