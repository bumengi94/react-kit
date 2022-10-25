import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { setLoading, setLoadingFail, setLoadingSuccess } from "~@redux/app/action";
import { loadingApi } from "~@redux/app/api";

export function* appSaga() {
	yield all([loadingWatcher].map(fork));
}

function* loadingWatcher() {
	yield takeLatest(setLoading.type, loadingWorker);
}

function* loadingWorker(action) {
	try {
		yield call(loadingApi);
		yield put(setLoadingSuccess(action.payload));
	} catch (e) {
		yield put(setLoadingFail());
	}
}
