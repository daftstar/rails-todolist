// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require app/util
//= require app/models/task
//= require app/views/task-view
//= require app/views/task-input-view
//= require app/views/task-list-view


(function () {

  // Instantiate a new, empty collection of tasks
  var tasks = new Tasks();

  // Create a new list view for our collection.
  // We tell it exactly where we want it to render (#task-list).
  var taskListView = new TaskListView({
    collection: tasks,
    el: '#task-list'
  });

  // Add initial tasks AFTER we create our taskListView. This is needed so that the
  // list view can listen for the collection's 'add' events.
  tasks.add([
    { name: 'create a todo list' },
    { name: 'add a second task', complete: true },
    { name: 'complete list' }
  ]);

  // Now we create a view to handle user input. This view allows the user to create new tasks.
  // Because the input html is already on the page, we tell this view to just use it (as opposed
  // to generating the html via an underscore template).
  var inputView = new TaskInputView({
    collection: tasks,
    el: 'form.new-task'
  });

})();
