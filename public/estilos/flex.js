import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    p_grid: {
        display: "flex",
        MsFlexWrap: "wrap",
        flexWrap: "wrap",
        marginRight: "-1rem",
        marginLeft: "-1rem",
        marginTop: "-1rem"
    },
    p_grid__p_col: {
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
        boxSizing: "border-box"
    },
    p_grid__class__p_col: {
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
        boxSizing: "border-box"
    },
    p_nogutter: {
        marginRight: "0",
        marginLeft: "0",
        marginTop: "0"
    },
    p_nogutter__p_col: {
        padding: "0"
    },
    p_nogutter__class__p_col: {
        padding: "0"
    },
    p_dir_row: {
        WebkitBoxOrient: "horizontal",
        WebkitBoxDirection: "normal",
        MsFlexDirection: "row",
        flexDirection: "row"
    },
    p_dir_rev: {
        WebkitBoxOrient: "horizontal",
        WebkitBoxDirection: "reverse",
        MsFlexDirection: "row-reverse",
        flexDirection: "row-reverse"
    },
    p_dir_col: {
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        MsFlexDirection: "column",
        flexDirection: "column"
    },
    p_dir_col_rev: {
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "reverse",
        MsFlexDirection: "column-reverse",
        flexDirection: "column-reverse"
    },
    p_justify_start: {
        WebkitBoxPack: "start",
        MsFlexPack: "start",
        justifyContent: "flex-start"
    },
    p_justify_end: {
        WebkitBoxPack: "end",
        MsFlexPack: "end",
        justifyContent: "flex-end"
    },
    p_justify_center: {
        WebkitBoxPack: "center",
        MsFlexPack: "center",
        justifyContent: "center"
    },
    p_justify_between: {
        WebkitBoxPack: "justify",
        MsFlexPack: "justify",
        justifyContent: "space-between"
    },
    p_justify_around: {
        MsFlexPack: "distribute",
        justifyContent: "space-around"
    },
    p_justify_even: {
        WebkitBoxPack: "space-evenly",
        MsFlexPack: "space-evenly",
        justifyContent: "space-evenly"
    },
    p_align_start: {
        WebkitBoxAlign: "start",
        MsFlexAlign: "start",
        alignItems: "flex-start"
    },
    p_align_end: {
        WebkitBoxAlign: "end",
        MsFlexAlign: "end",
        alignItems: "flex-end"
    },
    p_align_center: {
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center"
    },
    p_align_baseline: {
        WebkitBoxAlign: "baseline",
        MsFlexAlign: "baseline",
        alignItems: "baseline"
    },
    p_align_stretch: {
        WebkitBoxAlign: "stretch",
        MsFlexAlign: "stretch",
        alignItems: "stretch"
    },
    p_col: {
        WebkitBoxFlex: "1",
        MsFlexPositive: "1",
        flexGrow: "1",
        MsFlexPreferredSize: "0",
        flexBasis: "0",
        padding: "1rem"
    },
    p_col_fixed: {
        WebkitBoxFlex: "0",
        MsFlex: "0 0 auto",
        flex: "0 0 auto",
        padding: "1rem"
    },
    p_col_align_start: {
        MsFlexItemAlign: "start",
        alignSelf: "flex-start"
    },
    p_col_align_end: {
        MsFlexItemAlign: "end",
        alignSelf: "flex-end"
    },
    p_col_align_center: {
        MsFlexItemAlign: "center",
        MsGridRowAlign: "center",
        alignSelf: "center"
    },
    p_col_align_baseline: {
        MsFlexItemAlign: "baseline",
        alignSelf: "baseline"
    },
    p_col_align_stretch: {
        MsFlexItemAlign: "stretch",
        MsGridRowAlign: "stretch",
        alignSelf: "stretch"
    },
    p_dir_col__p_col: {
        MsFlexPreferredSize: "auto",
        flexBasis: "auto"
    },
    p_dir_col_rev__p_col: {
        MsFlexPreferredSize: "auto",
        flexBasis: "auto"
    },
    p_col_1: {
        width: "8.3333%"
    },
    p_col_2: {
        width: "16.6667%"
    },
    p_col_3: {
        width: "25%"
    },
    p_col_4: {
        width: "33.3333%"
    },
    p_col_5: {
        width: "41.6667%"
    },
    p_col_6: {
        width: "50%"
    },
    p_col_7: {
        width: "58.3333%"
    },
    p_col_8: {
        width: "66.6667%"
    },
    p_col_9: {
        width: "75%"
    },
    p_col_10: {
        width: "83.3333%"
    },
    p_col_11: {
        width: "91.6667%"
    },
    p_col_12: {
        width: "100%"
    },
    p_col_order_first: {
        MsFlexOrder: "-1",
        order: "-1"
    },
    p_col_order_last: {
        MsFlexOrder: "13",
        order: "13"
    },
    p_col_order_0: {
        MsFlexOrder: "0",
        order: "0"
    },
    p_col_order_1: {
        MsFlexOrder: "1",
        order: "1"
    },
    p_col_order_2: {
        MsFlexOrder: "2",
        order: "2"
    },
    p_col_order_3: {
        MsFlexOrder: "3",
        order: "3"
    },
    p_col_order_4: {
        MsFlexOrder: "4",
        order: "4"
    },
    p_col_order_5: {
        MsFlexOrder: "5",
        order: "5"
    },
    p_col_order_6: {
        MsFlexOrder: "6",
        order: "6"
    },
    p_col_order_7: {
        MsFlexOrder: "7",
        order: "7"
    },
    p_col_order_8: {
        MsFlexOrder: "8",
        order: "8"
    },
    p_col_order_9: {
        MsFlexOrder: "9",
        order: "9"
    },
    p_col_order_10: {
        MsFlexOrder: "10",
        order: "10"
    },
    p_col_order_11: {
        MsFlexOrder: "11",
        order: "11"
    },
    p_col_order_12: {
        MsFlexOrder: "12",
        order: "12"
    },
    p_offset_12: {
        marginLeft: "100%"
    },
    p_offset_11: {
        marginLeft: "91.66666667%"
    },
    p_offset_10: {
        marginLeft: "83.33333333%"
    },
    p_offset_9: {
        marginLeft: "75%"
    },
    p_offset_8: {
        marginLeft: "66.66666667%"
    },
    p_offset_7: {
        marginLeft: "58.33333333%"
    },
    p_offset_6: {
        marginLeft: "50%"
    },
    p_offset_5: {
        marginLeft: "41.66666667%"
    },
    p_offset_4: {
        marginLeft: "33.33333333%"
    },
    p_offset_3: {
        marginLeft: "25%"
    },
    p_offset_2: {
        marginLeft: "16.66666667%"
    },
    p_offset_1: {
        marginLeft: "8.33333333%"
    },
    p_offset_0: {
        marginLeft: "0%"
    },
    p_sm_1: {
        padding: "1rem"
    },
    p_sm_2: {
        padding: "1rem"
    },
    p_sm_3: {
        padding: "1rem"
    },
    p_sm_4: {
        padding: "1rem"
    },
    p_sm_5: {
        padding: "1rem"
    },
    p_sm_6: {
        padding: "1rem"
    },
    p_sm_7: {
        padding: "1rem"
    },
    p_sm_8: {
        padding: "1rem"
    },
    p_sm_9: {
        padding: "1rem"
    },
    p_sm_10: {
        padding: "1rem"
    },
    p_sm_11: {
        padding: "1rem"
    },
    p_sm_12: {
        padding: "1rem"
    },
    p_md_1: {
        padding: "1rem"
    },
    p_md_2: {
        padding: "1rem"
    },
    p_md_3: {
        padding: "1rem"
    },
    p_md_4: {
        padding: "1rem"
    },
    p_md_5: {
        padding: "1rem"
    },
    p_md_6: {
        padding: "1rem"
    },
    p_md_7: {
        padding: "1rem"
    },
    p_md_8: {
        padding: "1rem"
    },
    p_md_9: {
        padding: "1rem"
    },
    p_md_10: {
        padding: "1rem"
    },
    p_md_11: {
        padding: "1rem"
    },
    p_md_12: {
        padding: "1rem"
    },
    p_lg_1: {
        padding: "1rem"
    },
    p_lg_2: {
        padding: "1rem"
    },
    p_lg_3: {
        padding: "1rem"
    },
    p_lg_4: {
        padding: "1rem"
    },
    p_lg_5: {
        padding: "1rem"
    },
    p_lg_6: {
        padding: "1rem"
    },
    p_lg_7: {
        padding: "1rem"
    },
    p_lg_8: {
        padding: "1rem"
    },
    p_lg_9: {
        padding: "1rem"
    },
    p_lg_10: {
        padding: "1rem"
    },
    p_lg_11: {
        padding: "1rem"
    },
    p_lg_12: {
        padding: "1rem"
    },
    p_xl_1: {
        padding: "1rem"
    },
    p_xl_2: {
        padding: "1rem"
    },
    p_xl_3: {
        padding: "1rem"
    },
    p_xl_4: {
        padding: "1rem"
    },
    p_xl_5: {
        padding: "1rem"
    },
    p_xl_6: {
        padding: "1rem"
    },
    p_xl_7: {
        padding: "1rem"
    },
    p_xl_8: {
        padding: "1rem"
    },
    p_xl_9: {
        padding: "1rem"
    },
    p_xl_10: {
        padding: "1rem"
    },
    p_xl_11: {
        padding: "1rem"
    },
    p_xl_12: {
        padding: "1rem"
    },
    p_col_nogutter: {
        padding: "0"
    },
    "@media screen and (min-width: 576px)": {
        __expression__: "screen and (min-width: 576px)",
        p_sm_1: {
            width: "8.3333%"
        },
        p_sm_2: {
            width: "16.6667%"
        },
        p_sm_3: {
            width: "25%"
        },
        p_sm_4: {
            width: "33.3333%"
        },
        p_sm_5: {
            width: "41.6667%"
        },
        p_sm_6: {
            width: "50%"
        },
        p_sm_7: {
            width: "58.3333%"
        },
        p_sm_8: {
            width: "66.6667%"
        },
        p_sm_9: {
            width: "75%"
        },
        p_sm_10: {
            width: "83.3333%"
        },
        p_sm_11: {
            width: "91.6667%"
        },
        p_sm_12: {
            width: "100%"
        },
        p_sm_offset_12: {
            marginLeft: "100%"
        },
        p_sm_offset_11: {
            marginLeft: "91.66666667%"
        },
        p_sm_offset_10: {
            marginLeft: "83.33333333%"
        },
        p_sm_offset_9: {
            marginLeft: "75%"
        },
        p_sm_offset_8: {
            marginLeft: "66.66666667%"
        },
        p_sm_offset_7: {
            marginLeft: "58.33333333%"
        },
        p_sm_offset_6: {
            marginLeft: "50%"
        },
        p_sm_offset_5: {
            marginLeft: "41.66666667%"
        },
        p_sm_offset_4: {
            marginLeft: "33.33333333%"
        },
        p_sm_offset_3: {
            marginLeft: "25%"
        },
        p_sm_offset_2: {
            marginLeft: "16.66666667%"
        },
        p_sm_offset_1: {
            marginLeft: "8.33333333%"
        },
        p_sm_offset_0: {
            marginLeft: "0%"
        },
        p_sm_order_first: {
            MsFlexOrder: "-1",
            order: "-1"
        },
        p_sm_order_last: {
            MsFlexOrder: "13",
            order: "13"
        },
        p_sm_order_0: {
            MsFlexOrder: "0",
            order: "0"
        },
        p_sm_order_1: {
            MsFlexOrder: "1",
            order: "1"
        },
        p_sm_order_2: {
            MsFlexOrder: "2",
            order: "2"
        },
        p_sm_order_3: {
            MsFlexOrder: "3",
            order: "3"
        },
        p_sm_order_4: {
            MsFlexOrder: "4",
            order: "4"
        },
        p_sm_order_5: {
            MsFlexOrder: "5",
            order: "5"
        },
        p_sm_order_6: {
            MsFlexOrder: "6",
            order: "6"
        },
        p_sm_order_7: {
            MsFlexOrder: "7",
            order: "7"
        },
        p_sm_order_8: {
            MsFlexOrder: "8",
            order: "8"
        },
        p_sm_order_9: {
            MsFlexOrder: "9",
            order: "9"
        },
        p_sm_order_10: {
            MsFlexOrder: "10",
            order: "10"
        },
        p_sm_order_11: {
            MsFlexOrder: "11",
            order: "11"
        },
        p_sm_order_12: {
            MsFlexOrder: "12",
            order: "12"
        },
        p_mt_sm_0: {
            marginTop: "0 !important"
        },
        p_mt_sm_1: {
            marginTop: ".25rem !important"
        },
        p_mt_sm_2: {
            marginTop: ".5rem !important"
        },
        p_mt_sm_3: {
            marginTop: "1rem !important"
        },
        p_mt_sm_4: {
            marginTop: "1.5rem !important"
        },
        p_mt_sm_5: {
            marginTop: "2rem !important"
        },
        p_mt_sm_6: {
            marginTop: "3rem !important"
        },
        p_mt_sm_auto: {
            marginTop: "3rem !important"
        },
        p_mr_sm_0: {
            marginRight: "0 !important"
        },
        p_mr_sm_1: {
            marginRight: ".25rem !important"
        },
        p_mr_sm_2: {
            marginRight: ".5rem !important"
        },
        p_mr_sm_3: {
            marginRight: "1rem !important"
        },
        p_mr_sm_4: {
            marginRight: "1.5rem !important"
        },
        p_mr_sm_5: {
            marginRight: "2rem !important"
        },
        p_mr_sm_6: {
            marginRight: "3rem !important"
        },
        p_mr_sm_auto: {
            marginRight: "auto !important"
        },
        p_ml_sm_0: {
            marginLeft: "0 !important"
        },
        p_ml_sm_1: {
            marginLeft: ".25rem !important"
        },
        p_ml_sm_2: {
            marginLeft: ".5rem !important"
        },
        p_ml_sm_3: {
            marginLeft: "1rem !important"
        },
        p_ml_sm_4: {
            marginLeft: "1.5rem !important"
        },
        p_ml_sm_5: {
            marginLeft: "2rem !important"
        },
        p_ml_sm_6: {
            marginLeft: "3rem !important"
        },
        p_ml_sm_auto: {
            marginLeft: "auto !important"
        },
        p_mb_sm_0: {
            marginBottom: "0 !important"
        },
        p_mb_sm_1: {
            marginBottom: ".25rem !important"
        },
        p_mb_sm_2: {
            marginBottom: ".5rem !important"
        },
        p_mb_sm_3: {
            marginBottom: "1rem !important"
        },
        p_mb_sm_4: {
            marginBottom: "1.5rem !important"
        },
        p_mb_sm_5: {
            marginBottom: "2rem !important"
        },
        p_mb_sm_6: {
            marginBottom: "3rem !important"
        },
        p_mb_sm_auto: {
            marginBottom: "auto !important"
        },
        p_mx_sm_0: {
            marginLeft: "0 !important",
            marginRight: "0 !important"
        },
        p_mx_sm_1: {
            marginLeft: ".25rem !important",
            marginRight: ".25rem !important"
        },
        p_mx_sm_2: {
            marginLeft: ".5rem !important",
            marginRight: ".5rem !important"
        },
        p_mx_sm_3: {
            marginLeft: "1rem !important",
            marginRight: "1rem !important"
        },
        p_mx_sm_4: {
            marginLeft: "1.5rem !important",
            marginRight: "1.5rem !important"
        },
        p_mx_sm_5: {
            marginLeft: "2rem !important",
            marginRight: "2rem !important"
        },
        p_mx_sm_6: {
            marginLeft: "3rem !important",
            marginRight: "3rem !important"
        },
        p_mx_sm_auto: {
            marginLeft: "auto !important",
            marginRight: "auto !important"
        },
        p_my_sm_0: {
            marginTop: "0 !important",
            marginBottom: "0 !important"
        },
        p_my_sm_1: {
            marginTop: ".25rem !important",
            marginBottom: ".25rem !important"
        },
        p_my_sm_2: {
            marginTop: ".5rem !important",
            marginBottom: ".5rem !important"
        },
        p_my_sm_3: {
            marginTop: "1rem !important",
            marginBottom: "1rem !important"
        },
        p_my_sm_4: {
            marginTop: "1.5rem !important",
            marginBottom: "1.5rem !important"
        },
        p_my_sm_5: {
            marginTop: "2rem !important",
            marginBottom: "2rem !important"
        },
        p_my_sm_6: {
            marginTop: "3rem !important",
            marginBottom: "3rem !important"
        },
        p_my_sm_auto: {
            marginTop: "auto !important",
            marginBottom: "auto !important"
        },
        p_m_sm_0: {
            margin: "0 !important"
        },
        p_m_sm_1: {
            margin: ".25rem !important"
        },
        p_m_sm_2: {
            margin: ".5rem !important"
        },
        p_m_sm_3: {
            margin: "1rem !important"
        },
        p_m_sm_4: {
            margin: "1.5rem !important"
        },
        p_m_sm_5: {
            margin: "2rem !important"
        },
        p_m_sm_6: {
            margin: "3rem !important"
        },
        p_m_sm_auto: {
            margin: "auto !important"
        }
    },
    "@media screen and (min-width: 768px)": {
        __expression__: "screen and (min-width: 768px)",
        p_md_1: {
            width: "8.3333%"
        },
        p_md_2: {
            width: "16.6667%"
        },
        p_md_3: {
            width: "25%"
        },
        p_md_4: {
            width: "33.3333%"
        },
        p_md_5: {
            width: "41.6667%"
        },
        p_md_6: {
            width: "50%"
        },
        p_md_7: {
            width: "58.3333%"
        },
        p_md_8: {
            width: "66.6667%"
        },
        p_md_9: {
            width: "75%"
        },
        p_md_10: {
            width: "83.3333%"
        },
        p_md_11: {
            width: "91.6667%"
        },
        p_md_12: {
            width: "100%"
        },
        p_md_offset_12: {
            marginLeft: "100%"
        },
        p_md_offset_11: {
            marginLeft: "91.66666667%"
        },
        p_md_offset_10: {
            marginLeft: "83.33333333%"
        },
        p_md_offset_9: {
            marginLeft: "75%"
        },
        p_md_offset_8: {
            marginLeft: "66.66666667%"
        },
        p_md_offset_7: {
            marginLeft: "58.33333333%"
        },
        p_md_offset_6: {
            marginLeft: "50%"
        },
        p_md_offset_5: {
            marginLeft: "41.66666667%"
        },
        p_md_offset_4: {
            marginLeft: "33.33333333%"
        },
        p_md_offset_3: {
            marginLeft: "25%"
        },
        p_md_offset_2: {
            marginLeft: "16.66666667%"
        },
        p_md_offset_1: {
            marginLeft: "8.33333333%"
        },
        p_md_offset_0: {
            marginLeft: "0%"
        },
        p_md_order_first: {
            MsFlexOrder: "-1",
            order: "-1"
        },
        p_md_order_last: {
            MsFlexOrder: "13",
            order: "13"
        },
        p_md_order_0: {
            MsFlexOrder: "0",
            order: "0"
        },
        p_md_order_1: {
            MsFlexOrder: "1",
            order: "1"
        },
        p_md_order_2: {
            MsFlexOrder: "2",
            order: "2"
        },
        p_md_order_3: {
            MsFlexOrder: "3",
            order: "3"
        },
        p_md_order_4: {
            MsFlexOrder: "4",
            order: "4"
        },
        p_md_order_5: {
            MsFlexOrder: "5",
            order: "5"
        },
        p_md_order_6: {
            MsFlexOrder: "6",
            order: "6"
        },
        p_md_order_7: {
            MsFlexOrder: "7",
            order: "7"
        },
        p_md_order_8: {
            MsFlexOrder: "8",
            order: "8"
        },
        p_md_order_9: {
            MsFlexOrder: "9",
            order: "9"
        },
        p_md_order_10: {
            MsFlexOrder: "10",
            order: "10"
        },
        p_md_order_11: {
            MsFlexOrder: "11",
            order: "11"
        },
        p_md_order_12: {
            MsFlexOrder: "12",
            order: "12"
        },
        p_mt_md_0: {
            marginTop: "0 !important"
        },
        p_mt_md_1: {
            marginTop: ".25rem !important"
        },
        p_mt_md_2: {
            marginTop: ".5rem !important"
        },
        p_mt_md_3: {
            marginTop: "1rem !important"
        },
        p_mt_md_4: {
            marginTop: "1.5rem !important"
        },
        p_mt_md_5: {
            marginTop: "2rem !important"
        },
        p_mt_md_6: {
            marginTop: "3rem !important"
        },
        p_mt_md_auto: {
            marginTop: "3rem !important"
        },
        p_mr_md_0: {
            marginRight: "0 !important"
        },
        p_mr_md_1: {
            marginRight: ".25rem !important"
        },
        p_mr_md_2: {
            marginRight: ".5rem !important"
        },
        p_mr_md_3: {
            marginRight: "1rem !important"
        },
        p_mr_md_4: {
            marginRight: "1.5rem !important"
        },
        p_mr_md_5: {
            marginRight: "2rem !important"
        },
        p_mr_md_6: {
            marginRight: "3rem !important"
        },
        p_mr_md_auto: {
            marginRight: "auto !important"
        },
        p_ml_md_0: {
            marginLeft: "0 !important"
        },
        p_ml_md_1: {
            marginLeft: ".25rem !important"
        },
        p_ml_md_2: {
            marginLeft: ".5rem !important"
        },
        p_ml_md_3: {
            marginLeft: "1rem !important"
        },
        p_ml_md_4: {
            marginLeft: "1.5rem !important"
        },
        p_ml_md_5: {
            marginLeft: "2rem !important"
        },
        p_ml_md_6: {
            marginLeft: "3rem !important"
        },
        p_ml_md_auto: {
            marginLeft: "auto !important"
        },
        p_mb_md_0: {
            marginBottom: "0 !important"
        },
        p_mb_md_1: {
            marginBottom: ".25rem !important"
        },
        p_mb_md_2: {
            marginBottom: ".5rem !important"
        },
        p_mb_md_3: {
            marginBottom: "1rem !important"
        },
        p_mb_md_4: {
            marginBottom: "1.5rem !important"
        },
        p_mb_md_5: {
            marginBottom: "2rem !important"
        },
        p_mb_md_6: {
            marginBottom: "3rem !important"
        },
        p_mb_md_auto: {
            marginBottom: "auto !important"
        },
        p_mx_md_0: {
            marginLeft: "0 !important",
            marginRight: "0 !important"
        },
        p_mx_md_1: {
            marginLeft: ".25rem !important",
            marginRight: ".25rem !important"
        },
        p_mx_md_2: {
            marginLeft: ".5rem !important",
            marginRight: ".5rem !important"
        },
        p_mx_md_3: {
            marginLeft: "1rem !important",
            marginRight: "1rem !important"
        },
        p_mx_md_4: {
            marginLeft: "1.5rem !important",
            marginRight: "1.5rem !important"
        },
        p_mx_md_5: {
            marginLeft: "2rem !important",
            marginRight: "2rem !important"
        },
        p_mx_md_6: {
            marginLeft: "3rem !important",
            marginRight: "3rem !important"
        },
        p_mx_md_auto: {
            marginLeft: "auto !important",
            marginRight: "auto !important"
        },
        p_my_md_0: {
            marginTop: "0 !important",
            marginBottom: "0 !important"
        },
        p_my_md_1: {
            marginTop: ".25rem !important",
            marginBottom: ".25rem !important"
        },
        p_my_md_2: {
            marginTop: ".5rem !important",
            marginBottom: ".5rem !important"
        },
        p_my_md_3: {
            marginTop: "1rem !important",
            marginBottom: "1rem !important"
        },
        p_my_md_4: {
            marginTop: "1.5rem !important",
            marginBottom: "1.5rem !important"
        },
        p_my_md_5: {
            marginTop: "2rem !important",
            marginBottom: "2rem !important"
        },
        p_my_md_6: {
            marginTop: "3rem !important",
            marginBottom: "3rem !important"
        },
        p_my_md_auto: {
            marginTop: "auto !important",
            marginBottom: "auto !important"
        },
        p_m_md_0: {
            margin: "0 !important"
        },
        p_m_md_1: {
            margin: ".25rem !important"
        },
        p_m_md_2: {
            margin: ".5rem !important"
        },
        p_m_md_3: {
            margin: "1rem !important"
        },
        p_m_md_4: {
            margin: "1.5rem !important"
        },
        p_m_md_5: {
            margin: "2rem !important"
        },
        p_m_md_6: {
            margin: "3rem !important"
        },
        p_m_md_auto: {
            margin: "auto !important"
        }
    },
    "@media screen and (min-width: 992px)": {
        __expression__: "screen and (min-width: 992px)",
        p_lg_1: {
            width: "8.3333%"
        },
        p_lg_2: {
            width: "16.6667%"
        },
        p_lg_3: {
            width: "25%"
        },
        p_lg_4: {
            width: "33.3333%"
        },
        p_lg_5: {
            width: "41.6667%"
        },
        p_lg_6: {
            width: "50%"
        },
        p_lg_7: {
            width: "58.3333%"
        },
        p_lg_8: {
            width: "66.6667%"
        },
        p_lg_9: {
            width: "75%"
        },
        p_lg_10: {
            width: "83.3333%"
        },
        p_lg_11: {
            width: "91.6667%"
        },
        p_lg_12: {
            width: "100%"
        },
        p_lg_offset_12: {
            marginLeft: "100%"
        },
        p_lg_offset_11: {
            marginLeft: "91.66666667%"
        },
        p_lg_offset_10: {
            marginLeft: "83.33333333%"
        },
        p_lg_offset_9: {
            marginLeft: "75%"
        },
        p_lg_offset_8: {
            marginLeft: "66.66666667%"
        },
        p_lg_offset_7: {
            marginLeft: "58.33333333%"
        },
        p_lg_offset_6: {
            marginLeft: "50%"
        },
        p_lg_offset_5: {
            marginLeft: "41.66666667%"
        },
        p_lg_offset_4: {
            marginLeft: "33.33333333%"
        },
        p_lg_offset_3: {
            marginLeft: "25%"
        },
        p_lg_offset_2: {
            marginLeft: "16.66666667%"
        },
        p_lg_offset_1: {
            marginLeft: "8.33333333%"
        },
        p_lg_offset_0: {
            marginLeft: "0%"
        },
        p_lg_order_first: {
            MsFlexOrder: "-1",
            order: "-1"
        },
        p_lg_order_last: {
            MsFlexOrder: "13",
            order: "13"
        },
        p_lg_order_0: {
            MsFlexOrder: "0",
            order: "0"
        },
        p_lg_order_1: {
            MsFlexOrder: "1",
            order: "1"
        },
        p_lg_order_2: {
            MsFlexOrder: "2",
            order: "2"
        },
        p_lg_order_3: {
            MsFlexOrder: "3",
            order: "3"
        },
        p_lg_order_4: {
            MsFlexOrder: "4",
            order: "4"
        },
        p_lg_order_5: {
            MsFlexOrder: "5",
            order: "5"
        },
        p_lg_order_6: {
            MsFlexOrder: "6",
            order: "6"
        },
        p_lg_order_7: {
            MsFlexOrder: "7",
            order: "7"
        },
        p_lg_order_8: {
            MsFlexOrder: "8",
            order: "8"
        },
        p_lg_order_9: {
            MsFlexOrder: "9",
            order: "9"
        },
        p_lg_order_10: {
            MsFlexOrder: "10",
            order: "10"
        },
        p_lg_order_11: {
            MsFlexOrder: "11",
            order: "11"
        },
        p_lg_order_12: {
            MsFlexOrder: "12",
            order: "12"
        },
        p_mt_lg_0: {
            marginTop: "0 !important"
        },
        p_mt_lg_1: {
            marginTop: ".25rem !important"
        },
        p_mt_lg_2: {
            marginTop: ".5rem !important"
        },
        p_mt_lg_3: {
            marginTop: "1rem !important"
        },
        p_mt_lg_4: {
            marginTop: "1.5rem !important"
        },
        p_mt_lg_5: {
            marginTop: "2rem !important"
        },
        p_mt_lg_6: {
            marginTop: "3rem !important"
        },
        p_mt_lg_auto: {
            marginTop: "3rem !important"
        },
        p_mr_lg_0: {
            marginRight: "0 !important"
        },
        p_mr_lg_1: {
            marginRight: ".25rem !important"
        },
        p_mr_lg_2: {
            marginRight: ".5rem !important"
        },
        p_mr_lg_3: {
            marginRight: "1rem !important"
        },
        p_mr_lg_4: {
            marginRight: "1.5rem !important"
        },
        p_mr_lg_5: {
            marginRight: "2rem !important"
        },
        p_mr_lg_6: {
            marginRight: "3rem !important"
        },
        p_mr_lg_auto: {
            marginRight: "auto !important"
        },
        p_ml_lg_0: {
            marginLeft: "0 !important"
        },
        p_ml_lg_1: {
            marginLeft: ".25rem !important"
        },
        p_ml_lg_2: {
            marginLeft: ".5rem !important"
        },
        p_ml_lg_3: {
            marginLeft: "1rem !important"
        },
        p_ml_lg_4: {
            marginLeft: "1.5rem !important"
        },
        p_ml_lg_5: {
            marginLeft: "2rem !important"
        },
        p_ml_lg_6: {
            marginLeft: "3rem !important"
        },
        p_ml_lg_auto: {
            marginLeft: "auto !important"
        },
        p_mb_lg_0: {
            marginBottom: "0 !important"
        },
        p_mb_lg_1: {
            marginBottom: ".25rem !important"
        },
        p_mb_lg_2: {
            marginBottom: ".5rem !important"
        },
        p_mb_lg_3: {
            marginBottom: "1rem !important"
        },
        p_mb_lg_4: {
            marginBottom: "1.5rem !important"
        },
        p_mb_lg_5: {
            marginBottom: "2rem !important"
        },
        p_mb_lg_6: {
            marginBottom: "3rem !important"
        },
        p_mb_lg_auto: {
            marginBottom: "auto !important"
        },
        p_mx_lg_0: {
            marginLeft: "0 !important",
            marginRight: "0 !important"
        },
        p_mx_lg_1: {
            marginLeft: ".25rem !important",
            marginRight: ".25rem !important"
        },
        p_mx_lg_2: {
            marginLeft: ".5rem !important",
            marginRight: ".5rem !important"
        },
        p_mx_lg_3: {
            marginLeft: "1rem !important",
            marginRight: "1rem !important"
        },
        p_mx_lg_4: {
            marginLeft: "1.5rem !important",
            marginRight: "1.5rem !important"
        },
        p_mx_lg_5: {
            marginLeft: "2rem !important",
            marginRight: "2rem !important"
        },
        p_mx_lg_6: {
            marginLeft: "3rem !important",
            marginRight: "3rem !important"
        },
        p_mx_lg_auto: {
            marginLeft: "auto !important",
            marginRight: "auto !important"
        },
        p_my_lg_0: {
            marginTop: "0 !important",
            marginBottom: "0 !important"
        },
        p_my_lg_1: {
            marginTop: ".25rem !important",
            marginBottom: ".25rem !important"
        },
        p_my_lg_2: {
            marginTop: ".5rem !important",
            marginBottom: ".5rem !important"
        },
        p_my_lg_3: {
            marginTop: "1rem !important",
            marginBottom: "1rem !important"
        },
        p_my_lg_4: {
            marginTop: "1.5rem !important",
            marginBottom: "1.5rem !important"
        },
        p_my_lg_5: {
            marginTop: "2rem !important",
            marginBottom: "2rem !important"
        },
        p_my_lg_6: {
            marginTop: "3rem !important",
            marginBottom: "3rem !important"
        },
        p_my_lg_auto: {
            marginTop: "auto !important",
            marginBottom: "auto !important"
        },
        p_m_lg_0: {
            margin: "0 !important"
        },
        p_m_lg_1: {
            margin: ".25rem !important"
        },
        p_m_lg_2: {
            margin: ".5rem !important"
        },
        p_m_lg_3: {
            margin: "1rem !important"
        },
        p_m_lg_4: {
            margin: "1.5rem !important"
        },
        p_m_lg_5: {
            margin: "2rem !important"
        },
        p_m_lg_6: {
            margin: "3rem !important"
        },
        p_m_lg_auto: {
            margin: "auto !important"
        }
    },
    "@media screen and (min-width: 1200px)": {
        __expression__: "screen and (min-width: 1200px)",
        p_xl_1: {
            width: "8.3333%"
        },
        p_xl_2: {
            width: "16.6667%"
        },
        p_xl_3: {
            width: "25%"
        },
        p_xl_4: {
            width: "33.3333%"
        },
        p_xl_5: {
            width: "41.6667%"
        },
        p_xl_6: {
            width: "50%"
        },
        p_xl_7: {
            width: "58.3333%"
        },
        p_xl_8: {
            width: "66.6667%"
        },
        p_xl_9: {
            width: "75%"
        },
        p_xl_10: {
            width: "83.3333%"
        },
        p_xl_11: {
            width: "91.6667%"
        },
        p_xl_12: {
            width: "100%"
        },
        p_xl_offset_12: {
            marginLeft: "100%"
        },
        p_xl_offset_11: {
            marginLeft: "91.66666667%"
        },
        p_xl_offset_10: {
            marginLeft: "83.33333333%"
        },
        p_xl_offset_9: {
            marginLeft: "75%"
        },
        p_xl_offset_8: {
            marginLeft: "66.66666667%"
        },
        p_xl_offset_7: {
            marginLeft: "58.33333333%"
        },
        p_xl_offset_6: {
            marginLeft: "50%"
        },
        p_xl_offset_5: {
            marginLeft: "41.66666667%"
        },
        p_xl_offset_4: {
            marginLeft: "33.33333333%"
        },
        p_xl_offset_3: {
            marginLeft: "25%"
        },
        p_xl_offset_2: {
            marginLeft: "16.66666667%"
        },
        p_xl_offset_1: {
            marginLeft: "8.33333333%"
        },
        p_xl_offset_0: {
            marginLeft: "0%"
        },
        p_xl_order_first: {
            MsFlexOrder: "-1",
            order: "-1"
        },
        p_xl_order_last: {
            MsFlexOrder: "13",
            order: "13"
        },
        p_xl_order_0: {
            MsFlexOrder: "0",
            order: "0"
        },
        p_xl_order_1: {
            MsFlexOrder: "1",
            order: "1"
        },
        p_xl_order_2: {
            MsFlexOrder: "2",
            order: "2"
        },
        p_xl_order_3: {
            MsFlexOrder: "3",
            order: "3"
        },
        p_xl_order_4: {
            MsFlexOrder: "4",
            order: "4"
        },
        p_xl_order_5: {
            MsFlexOrder: "5",
            order: "5"
        },
        p_xl_order_6: {
            MsFlexOrder: "6",
            order: "6"
        },
        p_xl_order_7: {
            MsFlexOrder: "7",
            order: "7"
        },
        p_xl_order_8: {
            MsFlexOrder: "8",
            order: "8"
        },
        p_xl_order_9: {
            MsFlexOrder: "9",
            order: "9"
        },
        p_xl_order_10: {
            MsFlexOrder: "10",
            order: "10"
        },
        p_xl_order_11: {
            MsFlexOrder: "11",
            order: "11"
        },
        p_xl_order_12: {
            MsFlexOrder: "12",
            order: "12"
        },
        p_mt_xl_0: {
            marginTop: "0 !important"
        },
        p_mt_xl_1: {
            marginTop: ".25rem !important"
        },
        p_mt_xl_2: {
            marginTop: ".5rem !important"
        },
        p_mt_xl_3: {
            marginTop: "1rem !important"
        },
        p_mt_xl_4: {
            marginTop: "1.5rem !important"
        },
        p_mt_xl_5: {
            marginTop: "2rem !important"
        },
        p_mt_xl_6: {
            marginTop: "3rem !important"
        },
        p_mt_xl_auto: {
            marginTop: "3rem !important"
        },
        p_mr_xl_0: {
            marginRight: "0 !important"
        },
        p_mr_xl_1: {
            marginRight: ".25rem !important"
        },
        p_mr_xl_2: {
            marginRight: ".5rem !important"
        },
        p_mr_xl_3: {
            marginRight: "1rem !important"
        },
        p_mr_xl_4: {
            marginRight: "1.5rem !important"
        },
        p_mr_xl_5: {
            marginRight: "2rem !important"
        },
        p_mr_xl_6: {
            marginRight: "3rem !important"
        },
        p_mr_xl_auto: {
            marginRight: "auto !important"
        },
        p_ml_xl_0: {
            marginLeft: "0 !important"
        },
        p_ml_xl_1: {
            marginLeft: ".25rem !important"
        },
        p_ml_xl_2: {
            marginLeft: ".5rem !important"
        },
        p_ml_xl_3: {
            marginLeft: "1rem !important"
        },
        p_ml_xl_4: {
            marginLeft: "1.5rem !important"
        },
        p_ml_xl_5: {
            marginLeft: "2rem !important"
        },
        p_ml_xl_6: {
            marginLeft: "3rem !important"
        },
        p_ml_xl_auto: {
            marginLeft: "auto !important"
        },
        p_mb_xl_0: {
            marginBottom: "0 !important"
        },
        p_mb_xl_1: {
            marginBottom: ".25rem !important"
        },
        p_mb_xl_2: {
            marginBottom: ".5rem !important"
        },
        p_mb_xl_3: {
            marginBottom: "1rem !important"
        },
        p_mb_xl_4: {
            marginBottom: "1.5rem !important"
        },
        p_mb_xl_5: {
            marginBottom: "2rem !important"
        },
        p_mb_xl_6: {
            marginBottom: "3rem !important"
        },
        p_mb_xl_auto: {
            marginBottom: "auto !important"
        },
        p_mx_xl_0: {
            marginLeft: "0 !important",
            marginRight: "0 !important"
        },
        p_mx_xl_1: {
            marginLeft: ".25rem !important",
            marginRight: ".25rem !important"
        },
        p_mx_xl_2: {
            marginLeft: ".5rem !important",
            marginRight: ".5rem !important"
        },
        p_mx_xl_3: {
            marginLeft: "1rem !important",
            marginRight: "1rem !important"
        },
        p_mx_xl_4: {
            marginLeft: "1.5rem !important",
            marginRight: "1.5rem !important"
        },
        p_mx_xl_5: {
            marginLeft: "2rem !important",
            marginRight: "2rem !important"
        },
        p_mx_xl_6: {
            marginLeft: "3rem !important",
            marginRight: "3rem !important"
        },
        p_mx_xl_auto: {
            marginLeft: "auto !important",
            marginRight: "auto !important"
        },
        p_my_xl_0: {
            marginTop: "0 !important",
            marginBottom: "0 !important"
        },
        p_my_xl_1: {
            marginTop: ".25rem !important",
            marginBottom: ".25rem !important"
        },
        p_my_xl_2: {
            marginTop: ".5rem !important",
            marginBottom: ".5rem !important"
        },
        p_my_xl_3: {
            marginTop: "1rem !important",
            marginBottom: "1rem !important"
        },
        p_my_xl_4: {
            marginTop: "1.5rem !important",
            marginBottom: "1.5rem !important"
        },
        p_my_xl_5: {
            marginTop: "2rem !important",
            marginBottom: "2rem !important"
        },
        p_my_xl_6: {
            marginTop: "3rem !important",
            marginBottom: "3rem !important"
        },
        p_my_xl_auto: {
            marginTop: "auto !important",
            marginBottom: "auto !important"
        },
        p_m_xl_0: {
            margin: "0 !important"
        },
        p_m_xl_1: {
            margin: ".25rem !important"
        },
        p_m_xl_2: {
            margin: ".5rem !important"
        },
        p_m_xl_3: {
            margin: "1rem !important"
        },
        p_m_xl_4: {
            margin: "1.5rem !important"
        },
        p_m_xl_5: {
            margin: "2rem !important"
        },
        p_m_xl_6: {
            margin: "3rem !important"
        },
        p_m_xl_auto: {
            margin: "auto !important"
        }
    },
    p_field: {
        marginBottom: "1rem"
    },
    p_field_label: {
        display: "inline-block",
        marginBottom: ".5rem"
    },
    p_field_p_grid_label: {
        display: "flex",
        alignItems: "center"
    },
    p_field_p_grid: {
        marginTop: "0"
    },
    p_formgrid_p_grid: {
        marginTop: "0"
    },
    p_field_p_grid__p_col_fixed: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_fixed: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgroup__p_grid__p_col_1: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_1: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_2: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_2: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_3: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_3: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_4: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgroup_p_grid__p_col_4: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_5: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_5: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_6: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_6: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgroup__p_grid__p_col_7: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_7: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_8: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_8: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgroup__p_grid__p_col_9: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_9: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_10: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_10: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_11: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgroup_p_grid__p_col_11: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_field_p_grid__p_col_12: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgrid_p_grid__p_col_12: {
        paddingTop: "0",
        paddingBottom: "0"
    },
    p_formgroup_inline: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start"
    },
    p_formgroup_inline__p_field: {
        marginRight: "1rem"
    },
    p_formgroup_inline__p_field_checkbox: {
        marginRight: "1rem"
    },
    p_formgroup_inline__p_field_radiobutton: {
        marginRight: "1rem"
    },
    p_formgroup_inline__p_field_label: {
        marginRight: ".5rem",
        marginBottom: "0"
    },
    p_formgroup_inline__p_field_checkbox_label: {
        marginRight: ".5rem",
        marginBottom: "0"
    },
    p_formgroup_inline__p_field_radiobutton_label: {
        marginRight: ".5rem",
        marginBottom: "0"
    },
    p_field_checkbox: {
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center"
    },
    p_field_radiobutton: {
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center"
    },
    p_field_checkbox_label: {
        marginLeft: ".5rem",
        lineHeight: "1"
    },
    p_field_radiobutton_label: {
        marginLeft: ".5rem",
        lineHeight: "1"
    },
    p_mt_0: {
        marginTop: "0 !important"
    },
    p_mt_1: {
        marginTop: ".25rem !important"
    },
    p_mt_2: {
        marginTop: ".5rem !important"
    },
    p_mt_3: {
        marginTop: "1rem !important"
    },
    p_mt_4: {
        marginTop: "1.5rem !important"
    },
    p_mt_5: {
        marginTop: "2rem !important"
    },
    p_mt_6: {
        marginTop: "3rem !important"
    },
    p_mt_auto: {
        marginTop: "auto !important"
    },
    p_mr_0: {
        marginRight: "0 !important"
    },
    p_mr_1: {
        marginRight: ".25rem !important"
    },
    p_mr_2: {
        marginRight: ".5rem !important"
    },
    p_mr_3: {
        marginRight: "1rem !important"
    },
    p_mr_4: {
        marginRight: "1.5rem !important"
    },
    p_mr_5: {
        marginRight: "2rem !important"
    },
    p_mr_6: {
        marginRight: "3rem !important"
    },
    p_mr_auto: {
        marginRight: "auto !important"
    },
    p_ml_0: {
        marginLeft: "0 !important"
    },
    p_ml_1: {
        marginLeft: ".25rem !important"
    },
    p_ml_2: {
        marginLeft: ".5rem !important"
    },
    p_ml_3: {
        marginLeft: "1rem !important"
    },
    p_ml_4: {
        marginLeft: "1.5rem !important"
    },
    p_ml_5: {
        marginLeft: "2rem !important"
    },
    p_ml_6: {
        marginLeft: "3rem !important"
    },
    p_ml_auto: {
        marginLeft: "auto !important"
    },
    p_mb_0: {
        marginBottom: "0 !important"
    },
    p_mb_1: {
        marginBottom: ".25rem !important"
    },
    p_mb_2: {
        marginBottom: ".5rem !important"
    },
    p_mb_3: {
        marginBottom: "1rem !important"
    },
    p_mb_4: {
        marginBottom: "1.5rem !important"
    },
    p_mb_5: {
        marginBottom: "2rem !important"
    },
    p_mb_6: {
        marginBottom: "3rem !important"
    },
    p_mb_auto: {
        marginBottom: "auto !important"
    },
    p_mx_0: {
        marginLeft: "0 !important",
        marginRight: "0 !important"
    },
    p_mx_1: {
        marginLeft: ".25rem !important",
        marginRight: ".25rem !important"
    },
    p_mx_2: {
        marginLeft: ".5rem !important",
        marginRight: ".5rem !important"
    },
    p_mx_3: {
        marginLeft: "1rem !important",
        marginRight: "1rem !important"
    },
    p_mx_4: {
        marginLeft: "1.5rem !important",
        marginRight: "1.5rem !important"
    },
    p_mx_5: {
        marginLeft: "2rem !important",
        marginRight: "2rem !important"
    },
    p_mx_6: {
        marginLeft: "3rem !important",
        marginRight: "3rem !important"
    },
    p_mx_auto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    },
    p_my_0: {
        marginTop: "0 !important",
        marginBottom: "0 !important"
    },
    p_my_1: {
        marginTop: ".25rem !important",
        marginBottom: ".25rem !important"
    },
    p_my_2: {
        marginTop: ".5rem !important",
        marginBottom: ".5rem !important"
    },
    p_my_3: {
        marginTop: "1rem !important",
        marginBottom: "1rem !important"
    },
    p_my_4: {
        marginTop: "1.5rem !important",
        marginBottom: "1.5rem !important"
    },
    p_my_5: {
        marginTop: "2rem !important",
        marginBottom: "2rem !important"
    },
    p_my_6: {
        marginTop: "3rem !important",
        marginBottom: "3rem !important"
    },
    p_my_auto: {
        marginTop: "auto !important",
        marginBottom: "auto !important"
    },
    p_m_0: {
        margin: "0 !important"
    },
    p_m_1: {
        margin: ".25rem !important"
    },
    p_m_2: {
        margin: ".5rem !important"
    },
    p_m_3: {
        margin: "1rem !important"
    },
    p_m_4: {
        margin: "1.5rem !important"
    },
    p_m_5: {
        margin: "2rem !important"
    },
    p_m_6: {
        margin: "3rem !important"
    },
    p_m_auto: {
        margin: "auto !important"
    }
})