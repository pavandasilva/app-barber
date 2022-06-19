import styled from 'styled-components'
import { Tr, Th, Table, Td } from 'react-super-responsive-table'

export const TableStyled = styled(Table)`
  border-collapse: collapse;
`

export const ThTable = styled(Th)`
  border: 1px solid ${props => props.theme.colors.border};
  border-collapse: collapse;
`
export const TrTable = styled(Tr)`
  height: 23px !important;
`

export const TdTable = styled(Td)`
  height: 28px !important;
  border: 1px solid ${props => props.theme.colors.borderLight};
  padding: 0px 5px;
`
export const Container = styled.div`
  .responsiveTable {
    width: 100%;
  }

  .responsiveTable td .tdBefore {
    display: none;
  }

  @media screen and (max-width: 40em) {
    /*
      Force table elements to not behave like tables anymore
      Hide table headers (but not display: none;, for accessibility)
    */

    .responsiveTable table,
    .responsiveTable thead,
    .responsiveTable tbody,
    .responsiveTable th,
    .responsiveTable td,
    .responsiveTable tr {
      display: block;
    }

    .responsiveTable thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
      border-bottom: 2px solid #333;
    }

    .responsiveTable tbody tr {
      border: 1px solid ${props => props.theme.colors.borderLight};
      padding: 20px;
      margin-bottom: 14px;
      border-radius: 4px;
    }

    .responsiveTable td.pivoted {
      /* Behave like a "row" */
      border: none !important;
      position: relative;
      padding-left: calc(50% + 10px) !important;
      text-align: left !important;
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }

    .responsiveTable td .tdBefore {
      /* Now like a table header */
      position: absolute;
      display: block;

      /* Top/left values mimic padding */
      left: 1rem;
      width: calc(50% - 20px);
      white-space: pre-wrap;
      overflow-wrap: break-word;
      text-align: left !important;
      font-weight: 600;
    }
  }

`
