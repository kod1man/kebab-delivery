import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerCard from '../ui/CustomerCard';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

export default function CustomerPage({ user, onLogout, orders }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const [filterOrders, setFilterOrders] = useState([]);

  useEffect(() => {
    if (orders && Array.isArray(orders)) {
      setFilterOrders(orders.filter((el) => el.customerId === user.data.id));
    } else {
      setFilterOrders([]);
    }
  }, [orders, user]);

  console.log(filterOrders);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div className="customer-page">
          <p>Добро пожаловать, {user.data.name}!</p>
          <button
            style={{ marginBottom: '10px' }}
            className="btn-logout"
            onClick={handleLogout}
          >
            Выйти
          </button>
        </div>
        <Container style={{ marginTop: '20px' }}>
          <Row style={{ marginTop: '10px' }}>
            {filterOrders.length > 0 ? (
              filterOrders.map((el) => <CustomerCard key={el.id} order={el} />)
            ) : (
              <p>Вы не сделали еще ни одной покупки</p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}
