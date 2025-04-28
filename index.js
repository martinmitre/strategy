const {
    StandardShipping,
    ExpressShipping,
    InternationalShipping,
    ShippingContext
  } = require('./shippingstrategies');
  
  // Pedido de ejemplo
  const order = { weight: 12 }; // 12 kg
  
  // Crear contexto con estrategia estándar
  const shipping = new ShippingContext(new StandardShipping());
  console.log(`Costo de envío estándar: $${shipping.calculateShipping(order)}`);
  
  // Cambiar a envío exprés
  shipping.setStrategy(new ExpressShipping());
  console.log(`Costo de envío exprés: $${shipping.calculateShipping(order)}`);
  
  // Cambiar a envío internacional
  shipping.setStrategy(new InternationalShipping());
  console.log(`Costo de envío internacional: $${shipping.calculateShipping(order)}`);
