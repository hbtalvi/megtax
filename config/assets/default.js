'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/ng-img-crop/compile/unminified/ng-img-crop.css',
        'public/theme/css/animate.css',
        'public/theme/css/app.css',
        'public/theme/css/bootstrap.css',
        'public/theme/css/font-awesome.min.css',
        'public/theme/css/font.css',
        'public/theme/css/icon.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/ng-file-upload/ng-file-upload.js',
        'public/lib/ng-img-crop/compile/unminified/ng-img-crop.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
         'public/theme/js/bootstrap.js',
         
    // <!-- App -->
        'public/theme/js/app.js' ,
        'public/theme/js/slimscroll/jquery.slimscroll.min.js' ,
        'public/theme/js/charts/easypiechart/jquery.easy-pie-chart.js' ,
        'public/theme/js/charts/sparkline/jquery.sparkline.min.js' ,
        'public/theme/js/charts/flot/jquery.flot.min.js' ,
        'public/theme/js/charts/flot/jquery.flot.tooltip.min.js' ,
        'public/theme/js/charts/flot/jquery.flot.spline.js' ,
        'public/theme/js/charts/flot/jquery.flot.pie.min.js' ,
        'public/theme/js/charts/flot/jquery.flot.resize.js' ,
        'public/theme/js/charts/flot/jquery.flot.grow.js' ,
        'public/theme/js/calendar/bootstrap_calendar.js' ,
        'public/theme/js/sortable/jquery.sortable.js' ,
        'public/theme/js/app.plugin.js'


     
        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
