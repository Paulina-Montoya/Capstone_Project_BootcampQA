const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString();
report.generate({
  reportName: 'Bootcamp QA Report Front-end',
  jsonDir: 'report/JSONreport',
  reportPath: 'report/HTMLReport',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  displayReportTime: true,
  durationInMS: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', 
      value: `${projectName}` },
      { label: 'Release', 
      value: `${projectVersion}` },
      { label: 'Report Generation Time', 
      value: `${reportGenerationTime}` }
    ]
  }
});