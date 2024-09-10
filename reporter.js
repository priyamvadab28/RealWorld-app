const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'results/cucumber-json/',
  reportPath: 'results/report.html',
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '60',
    },
    device: 'Local test machine',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'RealWorld project' },
      { label: 'Environment', value: 'Local' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: 'September 11th 2024, 02:31 PM EST' },
      { label: 'Execution End Time', value: 'September 11th 2024, 02:56 PM EST' },
    ],
  },
});