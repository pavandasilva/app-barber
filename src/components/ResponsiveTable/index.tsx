import React from 'react'
import { Table, Tbody, Tr, Td, Thead } from 'react-super-responsive-table'
import { Container, TrTable, ThTable, TableStyled, TdTable } from './styles'

export type BorderMode = 'danger' | 'normal'

export type HeaderType = {
  title: string
  reference: string
  contrast?: boolean
  width?: number
}

export interface ResponsiveTableProps {
  selectRow?: boolean
  dbClickCallback?: (response: any) => void
  clickCallback?: (rowIndex: number) => void
  deleteRow?: boolean
  deleteFn?: (rowIndex: number) => void
  tabIndex?: number
  borderMode?: BorderMode
  showToolTip?: boolean
  toolTipText?: string
  data?: any[]
  header: HeaderType[]
}

export const ResponsiveTable = ({ header, data }: ResponsiveTableProps) => {
  return (
    <Container>
      <TableStyled>
        <Thead>
          <TrTable>
            {header.map(({ title, reference }) => (<ThTable key={reference}>{title}</ThTable>))}
          </TrTable>
        </Thead>
        <Tbody>
          {
            data?.map((item, index) => (
              <Tr key={index}>
                {header.map(({ reference }) => (
                  <TdTable key={index}>
                    {item[reference]}
                  </TdTable>
                ))}
              </Tr>
            ))
          }
        </Tbody>
      </TableStyled>
    </Container >
  )
}
