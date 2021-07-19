import * as React from 'react';
import { SubscribeFields } from './models/SubscribeFields';
export interface Props {
    subscribeFields: SubscribeFields;
    loggingFunction: Function;
    inputFieldValue: string;
}
export interface State {
    isSubscribed: boolean;
    unSubscribedWhenNotificationDisabled: boolean;
    isLocationShared: boolean;
    provideUserConsent: boolean;
    requireUserConsent: boolean;
    pauseIAM: boolean;
    state: any;
}
declare class OSButtons extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    createSubscribeFields(): never[];
    createDeviceFields(): never[];
    createNotificationFields(): never[];
    createSMSFields(): never[];
    createEmailFields(): never[];
    createInAppFields(): never[];
    createOutcomeFields(): never[];
    render(): JSX.Element;
}
export default OSButtons;
