interface Connector {
  doConnect(): boolean;
}

export class WifiConnector implements Connector {
  public doConnect(): boolean {
    console.log("Connecting via wifi");
    console.log("Get password");
    console.log("Lease an IP for 24 hours");
    console.log("Connected");
    return true;
  }
}

export class System {
  constructor(private connector: Connector) {
    connector.doConnect();
  }
}

export class BluetoothConnector implements Connector {
  public doConnect(): boolean {
    console.log("Connecting via Bluetooth");
    console.log("Pair with PIN");
    console.log("Connected");
    return true;
  }
}

// using single method
