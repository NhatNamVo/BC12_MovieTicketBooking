import callApi from 'utils/callApi';
const ticketApi = {
    fetchTheaterRoom(maLichChieu) {
        return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    },
    postTicketOrder(danhSachVe, token) {
        return callApi(`QuanLyDatVe/DatVe`,'POST',danhSachVe,token);
    }
}

export default ticketApi;