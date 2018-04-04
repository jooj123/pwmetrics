// Copyright 2016 Google Inc. All Rights Reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE

module.exports = {
  passes: [{
    recordTrace: true,
    pauseBeforeTraceEndMs: 5000,
    pauseAfterNetworkQuietMs: 2500,
    pauseAfterLoadMs: 5250,
    networkQuietThresholdMs: 5250,
    cpuQuietThresholdMs: 5250,
    useThrottling: true,
    gatherers: []
  }],

  audits: [
    'first-meaningful-paint',
    'speed-index-metric',
    'estimated-input-latency',
    'first-interactive',
    'consistently-interactive'
  ]
};
