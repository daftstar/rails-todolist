(function () {

  // LIST VIEW
  window.TaskListView = Backbone.View.extend({

    initialize: function (options) {
      // Call our assignNewTaskView function whenever our collection gets a new task.
      this.listenTo(this.collection, 'add', this.assignNewTaskView);
    },

    assignNewTaskView: function (task) {
      // Create a new view and assign it to the task model.
      // We're assigning it to the model instance so we can grab it later in `render`
      task.view = new TaskView({ model: task });

      // Render the new view and add it to our element
      task.view.render();
      $(this.el).prepend( task.view.el );
    },

    render: function () {
      // Here we are basically re-renders the collection.
      // Useful for calling when the collection removes a model
      $(this.el).empty();

      // Performs the assignNewTaskView function on each model in our collection.
      // We need to specifically tell .each to use this TaskList view as the caller.
      // We do that by passing it as the second argument.
      this.collection.each(this.assignNewTaskView, this);
    }

  });

})();
