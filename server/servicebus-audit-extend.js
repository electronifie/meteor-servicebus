this.servicebusAuditExtend = function () {

  return {
    handleOutgoing: function servicebusAuditExtend (queueName, message, options, next) {
      if (typeof options === 'function') {
        next = options;
        options = null;
      }

      if (typeof (options && options.headers && options.headers.audit) === 'object') {
        options.headers.audit.userId = options.headers.audit.userId || Meteor.userId();
        options.headers.audit.app = options.headers.audit.app || Meteor._appName;
      }

      next(null, queueName, message, options);
    }
  }
};
