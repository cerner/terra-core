import React from 'react';
import Table from '../../src/Table';

describe('Table', () => {
  // Snapshot Tests
  it('should render a Table', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with fill style', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        fill
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with fill style and scroll ref', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        fill
        scrollRefCallback={jest.fn()}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with padding standard', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        paddingStyle="standard"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table with padding compact', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        paddingStyle="compact"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Table header and footer nodes', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
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
        sectionData={[{
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
        hasChevrons
        sectionData={[{
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
        sectionData={[{
          sectionHeader: {
            key: 'row-key',
            id: 'row-id',
            numberOfColumns: 3,
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
        sectinData={[{
          sectionHeader: {
            key: 'row-key',
            id: 'row-id',
            numberOfColumns: 3,
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
        sectionData={[{
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
        sectionData={[{
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
        sectionData={[{
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
        sectionData={[{
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

  it('should render a Table with check style readOnly and row style toggle', () => {
    const shallowComponent = shallow(
      <Table
        summary="Test summary description"
        summaryId="test-id"
        checkStyle="readOnly"
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
        sectionData={[{
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
        paddingStyle="standard"
        headerData={{
          cells: [{
            key: 'cell-key',
            id: 'cell-id',
            children: 'content',
            removeInner: true,
          }],
        }}
        sectionData={[{
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
});
