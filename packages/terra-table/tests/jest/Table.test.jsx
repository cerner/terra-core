import React from 'react';
import Table from '../../src/Table';

describe('Table', () => {
  // Snapshot Tests
  it('should render a Table', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with fill style', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        fill
        bodyData={[{
          rows: [{
            key: 'row-key',
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with fill style and scroll ref', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        fill
        scrollRefCallback={jest.fn()}
        bodyData={[{
          rows: [{
            key: 'row-key',
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with padding standard', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        cellPaddingStyle="standard"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with padding compact', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        cellPaddingStyle="compact"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with simple footer', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        showSimpleFooter
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table header and footer nodes', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        headerNode={<p>asdf</p>}
        footerNode={<p>zxcv</p>}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with divider style - vertical', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        dividerStyle="vertical"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with divider style - horizontal', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        dividerStyle="horizontal"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with divider style - both', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        dividerStyle="both"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with number of rows', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={0}
        numberOfRows={6}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with header', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        headerData={{
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
          }],
          selectAllColumn: {
            checkLabel: 'test-label',
            checkStatus: 'indeterminate',
            onCheckAction: jest.fn(),
          },
        }}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with header with chevrons', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        hasChevrons
        headerData={{
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
          }],
          selectAllColumn: {
            checkLabel: 'test-label',
            checkStatus: 'indeterminate',
            onCheckAction: jest.fn(),
          },
        }}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with section rows', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        bodyData={[{
          rows: [{
            key: 'row-key',
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with section rows width chevrons', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        hasChevrons
        bodyData={[{
          rows: [{
            key: 'row-key',
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with section header', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        bodyData={[{
          sectionHeader: {
            key: 'row-key',
            id: 'row-id',
            title: 'row-title',
          },
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with section header and rows', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        bodyData={[{
          sectionHeader: {
            key: 'row-key',
            id: 'row-id',
            title: 'row-title',
          },
          rows: [{
            key: 'row-key',
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with widths', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        columnWidths={[
          { static: { value: 10, unit: 'px' } },
        ]}
        headerData={{
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
          }],
        }}
        bodyData={[{
          rows: [{
            key: 'row-key',
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with check style toggle', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        checkStyle="toggle"
        headerData={{
          selectAllColumn: {
            checkLabel: 'test-label',
          },
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
          }],
        }}
        bodyData={[{
          rows: [{
            key: 'row-key',
            toggleAction: {
              toggleLabel: 'check-toggle-label',
            },
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with row style toggle', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        rowStyle="toggle"
        headerData={{
          selectAllColumn: {
            checkLabel: 'test-label',
          },
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
          }],
        }}
        bodyData={[{
          rows: [{
            key: 'row-key',
            toggleAction: {
              toggleLabel: 'check-toggle-label',
            },
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with check style toggle and row style disclose', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        checkStyle="toggle"
        rowStyle="disclose"
        headerData={{
          selectAllColumn: {
            checkLabel: 'test-label',
          },
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
          }],
        }}
        bodyData={[{
          rows: [{
            key: 'row-key',
            toggleAction: {
              toggleLabel: 'check-toggle-label',
            },
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with check style icon and row style toggle', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        checkStyle="icon"
        rowStyle="toggle"
        headerData={{
          selectAllColumn: {
            checkLabel: 'test-label',
          },
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
          }],
        }}
        bodyData={[{
          rows: [{
            key: 'row-key',
            toggleAction: {
              toggleLabel: 'check-toggle-label',
            },
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with inners remove despite padding', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        cellPaddingStyle="standard"
        headerData={{
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
            removeInner: true,
          }],
        }}
        bodyData={[{
          rows: [{
            key: 'row-key',
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
              removeInner: true,
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with indexes overridden', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        numberOfColumns={1}
        numberOfRows={10}
        bodyData={[{
          rows: [{
            key: 'row-key',
            index: 4,
            cells: [{
              key: 'child-cell-key',
              id: 'child-cell-id',
              children: 'content',
            }],
          }],
        }]}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });
});
