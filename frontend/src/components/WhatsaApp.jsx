import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const WhatsAppButton = () => {
  const { cartItems, products, currency } = useContext(ShopContext);

  const generateWhatsAppMessage = () => {
    let message = 'hello i want to make an order*%0A *Order Details:*%0A'; // WhatsApp uses %0A for new lines
    let total = 0;

    Object.entries(cartItems).forEach(([productId, sizes]) => {
      const product = products.find((item) => item._id === productId);
      if (!product) return;

      Object.entries(sizes).forEach(([size, quantity]) => {
        const line = `- ${product.name} (${size}) x${quantity} = ${currency}${product.price * quantity}`;
        total += product.price * quantity;
        message += `${line}%0A`;
      });
    });

    message += `%0A*Delivery:* ${currency}10`;
    total += 10;
    message += `%0A*Total:* ${currency}${total}`;

    const phoneNumber = '212654909891'; // Replace with your actual number
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={generateWhatsAppMessage}
      className="bg-green-500 text-white px-6 py-2 mt-6 rounded hover:bg-green-600"
    >
      Send Order via WhatsApp
    </button>
  );
};

export default WhatsAppButton;
