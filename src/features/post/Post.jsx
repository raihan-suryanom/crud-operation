import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePagination, useTable } from 'react-table';
import Button from '../../common/components/Button';
import { updateData } from './postSlicer';

const Post = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const columns = useMemo(
    () => [
      {
        Header: 'No.',
        accessor: '',
        Cell: ({ row }) => Number(row.id) + 1,
        disableSortBy: true,
        disableFilters: true,
      },
      { Header: 'User ID', accessor: 'userId' },
      { Header: 'Post Title', accessor: 'title' },
      {
        Header: 'Actions',
        accessor: '',
        Cell: ({ row }) => {
          console.log(row);
          const deleteAction = async (id) => {
            const post = data.filter((i) => i.id !== id);
            dispatch(updateData(post));
          };

          return (
            <div className="flex items-center justify-between space-x-1.5 relative z-50">
              <button
                onClick={() => navigate('/edit')}
                type="button"
                className="bg-amber-500 p-0.5 rounded-sm"
              >
                Edit
              </button>
              <button
                onClick={() => navigate(`/detail/${row.original.id}`)}
                type="button"
                className="bg-teal-500 p-0.5 rounded-sm"
              >
                Detail
              </button>
              <button
                onClick={() => deleteAction(Number(row.original.id))}
                type="button"
                className="bg-red-500 p-0.5 rounded-sm"
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    [data, dispatch, navigate]
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage: isPrev,
    canNextPage: isNext,
    pageOptions,
    pageCount: pageC,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  if (isLoading) {
    return (
      <span className="mx-auto animate-pulse lg:w-6/12 h-5 bg-slate-500" />
    );
  }

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="p-2 text-dark bg-primary"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="cursor-pointer hover:border-t hover:border-b hover:border-primary"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="first-letter:uppercase last:text-left border px-5 py-1"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center space-x-4 pagination mt-2">
        <Button label={'<<'} event={() => gotoPage(0)} disabled={!isPrev} />
        <Button label={'<'} event={() => previousPage()} disabled={!isPrev} />
        <Button label={'>'} event={() => nextPage()} disabled={!isNext} />
        <Button
          label={'>>'}
          event={() => gotoPage(pageC - 1)}
          disabled={!isNext}
        />
        <span>
          Page
          <strong>
            <span className="text-primary"> {pageIndex + 1}</span> of{' '}
            <span className="text-primary">{pageOptions.length}</span>
          </strong>
        </span>
        <div className="flex items-center space-x-5">
          <p className='before:content-["|"] before:mr-4'>Go to page:</p>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            min={1}
            max={pageC}
            onChange={(e) =>
              gotoPage(e.target.value ? Number(e.target.value) - 1 : 0)
            }
            className="text-dark lg:w-10 text-center font-bold outline-none border-0"
          />
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="text-dark"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Post;
