import { NewItemForm } from '../components/NewItemForm';
import { connect } from 'react-redux';
import { addNewItem } from '../store/items/actions';

const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);

// if you don't pass connect any argument or mapStateToProps + mapDispatchToProps   its gonna pass in whole dispatch props is effective the same dispatch that we give from useDispatch hook

// if you create mapDipatchToProps Object not function it will automatically bind dispatch function then you don't need to bind it with action creator
