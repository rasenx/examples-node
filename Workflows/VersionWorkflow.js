const
  { Version } = require("zenaton"),
  VersionWorkflow_v0 = require("./VersionWorkflow_v0"),
  VersionWorkflow_v1 = require("./VersionWorkflow_v1"),
  VersionWorkflow_v2 = require("./VersionWorkflow_v2")
;

module.exports = Version("VersionWorkflow", [
  VersionWorkflow_v0,
  VersionWorkflow_v1,
  VersionWorkflow_v2
]);
