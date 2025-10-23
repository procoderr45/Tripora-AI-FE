export default function (messages, taskNumber, message, status) {
    const updatedMessage = messages.map((currentMessage, index) => {
        if (index == taskNumber) {
            return {
                ...currentMessage,
                message,
                status,
            };
        }

        return currentMessage;
    });

    return updatedMessage;
}
