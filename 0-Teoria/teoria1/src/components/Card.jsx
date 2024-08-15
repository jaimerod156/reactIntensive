import './card.css';

export const Card = ({estado}) => {
  return (
    <div className='card'>
        <h1>Mi primer card</h1>
        <p className={ estado ? 'on' : 'off' }>Detalle card</p>
    </div>
);
};