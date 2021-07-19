import * as React from 'react';
export interface Props {
    name: string;
}
export interface State {
    name: string;
    isSubscribed: boolean;
    isLocationShared: boolean;
    requiresPrivacyConsent: boolean;
    consoleValue: string;
    inputValue: string;
}
declare class OSDemo extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    OSLog: (message: string, optionalArg?: Object | undefined) => void;
    inputChange: (text: string) => void;
    render(): JSX.Element;
}
export default OSDemo;
