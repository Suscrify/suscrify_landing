import React from 'react';
import Image from 'next/image'


const CryptoTable = () => {
  return (
    <section className="bg-dark-black ptb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-4">
              <h2 className="mb-4">Crypto Market Live Price</h2>
              <p>
                Marrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined true
                generator.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table crypto-table">
                <thead>
                  <tr>
                    <th scope="col">Cryptocurrency</th>
                    <th scope="col">USD Price</th>
                    <th scope="col">1h % Change</th>
                    <th scope="col">24h % Change</th>
                    <th scope="col">7d % Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/btc.png"
                            alt="BTC"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            Bitcoin
                          </h5>
                          <small>BTC</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">39000</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.04%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-3.26%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-7.82%</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/eth.png"
                            alt="ETH"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            Ethereum
                          </h5>
                          <small>ETH</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">2896</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.6%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-4.73%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-8.89%</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/usdt.png"
                            alt="USDT"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            Tether
                          </h5>
                          <small>USDT</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">1</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.01%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.05%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.04%</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/bnb.png"
                            alt="BNB"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            Tether
                          </h5>
                          <small>USDT</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">398</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.27%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-3.92%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-4.57%</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/usdc.png"
                            alt="USDC"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            USD Coin
                          </h5>
                          <small>USDC</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">0</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.04%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.13%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-up">0.05%</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/xrp.png"
                            alt="XRP"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">XRP</h5>
                          <small>XRP</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">0</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.3%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-5.71%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-1.18%</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/sol.png"
                            alt="SOL"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            Solana
                          </h5>
                          <small>SOL</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">95</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.81%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-6.06%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">
                        -13.66%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/ada.png"
                            alt="ADA"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            Cardana
                          </h5>
                          <small>ADA</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">0</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-up">0.34%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-7.43%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">
                        -13.43%
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/luna.png"
                            alt="LUNA"
                            width={30} height={30}
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">Terra</h5>
                          <small>LUNA</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">76</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.21%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-6.12%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">
                        -13.79%
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="coin-info d-flex">
                        <div className="coin-icon pe-3">
                          <Image
                            src="/coins/avax.png"
                            alt="AVAX"
                            width={30} height={30}
                            className="rounded-circle"
                          />
                        </div>
                        <div>
                          <h5 className="text-white h6 m-0 fw-medium">
                            Avalanche
                          </h5>
                          <small>AVAX</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="coin-price">73</p>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-0.63%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">-6.23%</div>
                    </td>
                    <td>
                      <div className="coin-price-change price-down">
                        -11.01%
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CryptoTable