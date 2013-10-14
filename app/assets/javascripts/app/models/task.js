(function () {

  // MODEL
  window.Task = Backbone.Model.extend({
    defaults: {
      complete: false
    }
  });

  // COLLECTION
  window.Tasks = Backbone.Collection.extend({
    model: Task
  });

})();
