import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());sendMessageCreator()
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispachToProps) (Dialogs);
export default DialogsContainer;
