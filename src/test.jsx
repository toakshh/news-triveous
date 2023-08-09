// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import useDataFetching from './useDataFetching';
// import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './dataSlice';

// const DataComponent = () => {
//   const dispatch = useDispatch();
//   const { abc, loading, error } = useSelector((state) => state.data);

//   const { data: fetchedData, loading: fetchLoading, error: fetchError } = useDataFetching('https://api.example.com/data');

//   useEffect(() => {
//     if (fetchLoading) {
//       dispatch(fetchDataStart());
//     } else if (fetchedData) {
//       dispatch(fetchDataSuccess(fetchedData));
//     } else if (fetchError) {
//       dispatch(fetchDataFailure(fetchError));
//     }
//   }, [fetchLoading, fetchedData, fetchError, dispatch]);

//   return (
//     <div>
//       {loading ? <p>Loading...</p> : null}
//       {error ? <p>Error: {error.message}</p> : null}
//       { ? <p>Data: {JSON.stringify(abc)}</p> : null}
//     </div>
//   );
// };

// export default DataComponent;