(function () {

  // INPUT VIEW
  window.TaskInputView = Backbone.View.extend({

    events: {
      'submit': 'createTask'
    },

    createTask: function (e) {
      // Prevent the form from submitting
      e.preventDefault();

      // Grab the new task name
      var newTaskName = $(this.el).find('[name=task_name]').val();
      // Add a new task to our collection
      this.collection.add({ name: newTaskName });
    }

  });

})();
