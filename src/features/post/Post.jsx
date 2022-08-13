import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { usePagination, useTable } from 'react-table';
import Button from '../../common/components/Button';

const Post = () => {
  const { data, isLoading } = useSelector((state) => state.data);
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
    ],
    []
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
      <table {...getTableProps()} className="">
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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
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
