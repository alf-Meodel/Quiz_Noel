import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Snowflake } from 'lucide-react';

interface QRCodeJoinProps {
  gameId: string;
}

export const QRCodeJoin: React.FC<QRCodeJoinProps> = ({ gameId }) => {
  const joinUrl = `${window.location.origin}/join/${gameId}`;

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-white/80 rounded-xl shadow-lg backdrop-blur-sm">
      <Snowflake className="w-12 h-12 text-teal-600" />
      <h2 className="text-2xl font-bold text-teal-800">Rejoindre la partie</h2>
      <div className="p-4 bg-white rounded-lg">
        <QRCodeSVG value={joinUrl} size={200} />
      </div>
      <p className="text-teal-700">Scannez le QR code pour rejoindre</p>
    </div>
  );
};