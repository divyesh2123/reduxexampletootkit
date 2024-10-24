import { call, put, takeLatest } from "redux-saga/effects";
import { getcomments } from "../service/commentservice";
import { CommentsError, CommentsRequest, CommentsSuc, IComments } from "../slice/commentsslice";


function* asyccomments()
{
    try
    {
        let p: IComments[] = yield call(getcomments)

        yield put(CommentsSuc(p));
    }
    catch(e)
    {
        yield put(CommentsError(e));
    }
    
}


export   function* watcherComments()
{
    yield takeLatest(CommentsRequest().type,asyccomments)
}


