import { QRCodeSVG } from "qrcode.react";

type QRCodeProps = {
    value: string;
    size: number;
};

export default function QRCodeComponent({ value, size }: QRCodeProps) {
    return <QRCodeSVG value={value} size={size} />;
}
