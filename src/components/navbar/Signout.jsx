import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Signout = () => (
  <button type="button" className="text-center w-[100%] text-[#fff] justify-center flex gap-x-3 my-[30px] items-center">
    <FontAwesomeIcon icon={faRightToBracket} />
    <p>Signout</p>
  </button>
);

export default Signout;
