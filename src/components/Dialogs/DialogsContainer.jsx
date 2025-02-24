import { Navigate } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,   
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)  

const DialogsContainer = connect(mapStateToProps,mapDispachToProps) (AuthRedirectComponent);
export default DialogsContainer;
