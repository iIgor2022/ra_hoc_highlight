import PropTypes from 'prop-types'

export default function Popular(props) {
  return (
    <div className='wrap-item wrap-item-popular'>
      <span className='label'>Popular!</span>
      {props.children}
    </div>
  )
}

Popular.propTypes = {
  children: PropTypes.any,
}