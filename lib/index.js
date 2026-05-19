// ------------------------------
// استيراد الصادرات الأساسية
// ------------------------------
export { default as makeWASocket } from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Store/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';

// تصدير الدوال الإضافية التي تعتمد عليها أوامر الكراش
export {
    generateWAMessageFromContent,
    relayMessage,
    downloadContentFromMessage,
    getUSyncDevices,
    assertSessions,
    createParticipantNodes,
    encodeSignedDeviceIdentity,
    jidDecode,
    proto
} from './Socket/messages.js';

// التصدير الافتراضي (للتوافق مع الاستيرادات القديمة)
import makeWASocket from './Socket/index.js';
export default makeWASocket;