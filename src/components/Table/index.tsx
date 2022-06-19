import React, { useCallback, useEffect, useState } from 'react'
import ReactTable, { Column, RowInfo, TableProps } from 'react-table-6'
import { useTheme } from 'styled-components'
import { ToolTip } from '..'
import { Container } from './styles'

export type BorderMode = 'danger' | 'normal'
export interface PTableProps extends Partial<TableProps> {
  selectRow?: boolean
  dbClickCallback?: (response: any) => void
  clickCallback?: (rowIndex: number) => void
  deleteRow?: boolean
  deleteFn?: (rowIndex: number) => void
  tabIndex?: number
  borderMode?: BorderMode
  showToolTip?: boolean
  toolTipText?: string
}

export interface TableColumnProps extends Column { }

export const Table = ({
  dbClickCallback,
  clickCallback,
  selectRow = false,
  deleteRow = false,
  deleteFn, tabIndex = -1,
  onPageChange,
  borderMode = 'normal',
  showToolTip = false,
  toolTipText,
  ...rest
}: PTableProps) => {
  const [rowIndexSelected, setRowIndexSelected] = useState(() => selectRow ? 0 : -1)
  const [rowSelected, setRowSelected] = useState<any>({})
  const { colors } = useTheme()

  useEffect(() => {
    setRowSelected(() => {
      if (rowIndexSelected > -1 && rest.data?.length) {
        return rest.data[rowIndexSelected]
      } else {
        return {}
      }
    })
  }, [rest.data, rowIndexSelected])

  const handleTableRowOnclick = useCallback((rowIndex: number) => {
    setRowIndexSelected(rowIndex)

    clickCallback && clickCallback(rowIndex)
  }, [clickCallback])

  const handleOnKeyDown = useCallback(async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Delete' && rowIndexSelected >= 0 && deleteFn) {
      deleteFn(rowIndexSelected)
      setRowIndexSelected(-1)
    } else if (e.key === 'Enter' && rowSelected && dbClickCallback && selectRow) {
      dbClickCallback(rowSelected)
    } else if (e.key === 'ArrowDown' && selectRow && !!rest.data?.length) {
      if (rowIndexSelected !== rest.data?.length as number - 1) {
        setRowIndexSelected(oldState => {
          clickCallback && clickCallback(oldState + 1)
          return oldState + 1
        })
      }
    } else if (e.key === 'ArrowUp' && selectRow) {
      if (rowIndexSelected > 0) {
        setRowIndexSelected(oldState => {
          clickCallback && clickCallback(oldState - 1)
          return oldState - 1
        })
      }
    }
  }, [clickCallback, dbClickCallback, deleteFn, rest.data, rowIndexSelected, rowSelected, selectRow])

  const handleOnPageChange = useCallback((page: number) => {
    onPageChange && onPageChange(page)
    setRowIndexSelected(-1)
  }, [onPageChange])

  return (
    <Container
      borderMode={borderMode}
      rowSelected={4}
      selectRow={selectRow}
      onKeyDown={handleOnKeyDown}
      tabIndex={tabIndex === -1 && deleteRow ? 1 : tabIndex}
    >
      { showToolTip && <ToolTip>{toolTipText}</ToolTip>}
      <ReactTable
        {...rest}

        onPageChange={handleOnPageChange}

        getTrProps={(finalState: any, rowInfo?: RowInfo, column?: undefined, instance?: any) => {
          if (rowInfo) {
            return {
              style: {
                background: rowInfo.index === rowIndexSelected ? colors.info : colors.backgroundLight,
                color: rowInfo.index === rowIndexSelected ? colors.backgroundLight : colors.primaryText
              },
              onClick: () => {
                if (selectRow) {
                  handleTableRowOnclick(rowInfo?.index)
                }
              },
              onDoubleClick: () => {
                if (selectRow && dbClickCallback) {
                  dbClickCallback(rowInfo.row?._original)
                }
              }
            }
          }
          return {}
        }}
      />
    </Container>
  )
}
