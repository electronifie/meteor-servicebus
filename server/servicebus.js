bus = Npm.require('servicebus').bus({ 
    url: Meteor.settings.amqp.url
});

bus.use(bus.package());
bus.use(bus.correlate());
bus.use(bus.logger());
bus.use(bus.retry());
bus.use(servicebusAuditExtend());

this.Bus = bus;
