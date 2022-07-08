import { Request } from 'express';

interface Response<T> {
  data: T;
}

interface IFlatError {
  message: string;
  field: string;
  validation: string;
}

interface IErrors {
  message: string;
  field: string[];
  validation: string;
}

interface Error {
  type: string;
  message?: string;
  validation?: IFlatError[];
  error_type?: string | undefined;
  code?: number;
}

interface IError {
  error?: Error;
  data?: {
    key: string;
  };
}

export { Error, IError, IFlatError, Response, IErrors };
export interface ClassType<T> {
  new (args?: Partial<T>): T;
}

export interface IBuySellWonLoss {
  status: null | number;
  count: number | string;
}



export interface IResponse {
  count?: number;
  error?: boolean;
  message?: string;
  status?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  type?: 'FLOWEXCEPTION' | 'INTERNAL' | 'VALIDATION';
  validation?: IFlatError[];
}

export interface IMessariGetElement {
  id: number;
  symbol: string;
  name: string;
  slug: string;
  metrics: {
    market_data: {
      price_usd: number;
      price_btc: number;
      price_eth: number;
      volume_last_24_hours: number;
      percent_change_usd_last_24_hours: number;
      percent_change_btc_last_24_hours: number;
      percent_change_eth_last_24_hours: number;
      ohlcv_last_1_hour: { low: number | null };
      ohlcv_last_24_hour: { high: number | null; low: number | null };
    };
    marketcap: {
      current_marketcap_usd: number;
      liquid_marketcap_usd: number | null;
    };
    supply: { circulating: number; liquid: number | null };
    all_time_high: { price: number | null; at: string | number | Date };
    cycle_low: { price: number | null; at: string | number | Date };
  };
  profile: {
    economics: {
      consensus_and_emission: { supply: { max_supply: number | null } };
    };
  };
}

export interface IExirTicker {
  time: string;
  open: number;
  close: number;
  high: number;
  low: number;
  last: number;
  volume: number;
  symbol: string;
}

export interface IExirPair {
  [key: string]: {
    bids: [number[]];
    asks: [number[]];
    timestamp: string;
  };
}

export interface IExnovinStat {
  pair: string;
  bestBuy: string;
  bestSell: string;
  lastPrice: string;
  vol24Quote: string;
  vol24Base: string;
  bestBuyAmount: string;
  bestSellAmount: string;
  change24Percentage: number;
}

export interface IIrexlistData {
  check_time: number;
  coins: {
    [key: string]: {
      [key: string]: {
        buy: {
          price: number;
          vol: number;
        };
        echange_label: string;
        link: string;
        sell: {
          price: string;
          vol: string;
        };
        sort: string;
      };
    };
  };
}

export interface INobitexStat {
  status: string;
  stats: {
    [key: string]: {
      isClosed: boolean;
      bestSell: string;
      bestBuy: string;
      volumeSrc: string;
      volumeDst: string;
      latest: string;
      dayLow: string;
      dayHigh: string;
      dayOpen: string;
      dayClose: string;
      dayChange: string;
    };
  };
  global: {
    [key: string]: {
      [key: string]: number;
    };
  };
}

export interface IPair {
  pair: string;
  last_price: number;
  volume: number;
  bid_price: number;
  bid_volume: number;
  ask_price: number;
  ask_volume: number;
}

export interface IMarketData {
  pairs: IPair[];
  total: number;
}

export interface INobitexOrder {
  status: string;
  bids: [number[]];
  asks: [number[]];
}

export interface ICryptoSignal {
  totalCount: number;
  items: {
    id: number;
    ticker_id: number;
    created_at: number;
    is_active: 0 | 1;
    is_valid: 0 | 1;
    max_high: number;
    max_low: number;
    stop_loss: number;
    algorithm_version: number;
    symbol_name: string;
    symbol_full_name: string;
    exchange_name: string;
    base_currency: string;
    target_currency: string;
    symbol_image: string;
    invalid_signal_count: number;
    valid_signal_count: number;
    total_signal_count: number;
    symbol_value: number;
    max_profit_amount: number;
    target: number;
    target_2: number;
    target_3: number;
    action: string;
  }[];
}

export interface ICryptoCoin {
  totalCount: number;
  items: {
    id: number;
    symbol_id: number;
    exchange_id: number;
    daily_vol_change: number;
    created_at: number;
    updated_at: number;
    algorithm_version: number;
    full_name: string;
    exchange_name: string;
    symbol_name: string;
    target_currency: string;
    image: string;
    base_currency: string;
    action: string;
    valid_signal_count: number;
    invalid_signal_count: number;
    first_signal_time: number;
    last_signal_time: number;
    ticker_id: number;
    total_profit: number;
    total_signal_count: number;
  }[];
}

export type IGLassnodeBlockCount = { t: number; v: number };

export interface IAssetMetricIsExpires {
  days: number;
  last_metric_time: string;
}

export interface IMetricData {
  path: string;
  category: string;
  sub_category: string;
  metric_name: string;
  symbol: string;
  name: string;
  resolution: string;
  v_order: number;
  show_in_index: boolean;
  show_in_dash: boolean;
}

export interface IMessariData {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  _internal_temp_agora_id: string;
  metrics: {
    market_data: {
      price_usd: number;
      price_btc: number;
      price_eth: number;
      volume_last_24_hours: number;
      real_volume_last_24_hours: number;
      volume_last_24_hours_overstatement_multiple: number;
      percent_change_usd_last_1_hour: number;
      percent_change_usd_last_24_hours: number;
      percent_change_btc_last_24_hours: number;
      percent_change_eth_last_24_hours: number;
      ohlcv_last_1_hour: {
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
      };
      ohlcv_last_24_hour: {
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
      };
      last_trade_at: string;
    };
    marketcap: {
      marketcap_dominance_percent: number;
      current_marketcap_usd: number;
      y_2050_marketcap_usd: number;
      y_plus10_marketcap_usd: number;
      liquid_marketcap_usd: number;
      realized_marketcap_usd: number;
      volume_turnover_last_24_hours_percent: number;
    };
    supply: {
      y_2050: number;
      y_plus10: number;
      liquid: number;
      circulating: number;
      y_2050_issued_percent: number;
      annual_inflation_percent: number;
      stock_to_flow: number;
      y_plus10_issued_percent: number;
    };
    blockchain_stats_24_hours: {
      count_of_active_addresses: number;
      transaction_volume: number;
      adjusted_transaction_volume: number;
      adjusted_nvt: number;
      median_tx_value: number;
      median_tx_fee: number;
      count_of_tx: number;
      count_of_payments: number;
      new_issuance: number;
      average_difficulty: number;
      kilobytes_added: number;
      count_of_blocks_added: number;
    };
    market_data_liquidity: {
      clearing_prices_to_sell: number | null;
      marketcap: number | null;
      asset_bid_depth: number | null;
      usd_bid_depth: number | null;
      updated_at: string;
    };
    all_time_high: {
      price: number;
      at: string;
      days_since: number;
      percent_down: number;
      breakeven_multiple: number;
    };
    cycle_low: {
      price: number;
      at: string;
      percent_up: number;
      days_since: number;
    };
    token_sale_stats: {
      sale_proceeds_usd: number | null;
      sale_start_date: number | null;
      sale_end_date: number | null;
      roi_since_sale_usd_percent: number | null;
      roi_since_sale_btc_percent: number | null;
      roi_since_sale_eth_percent: number | null;
    };
    staking_stats: {
      staking_yield_percent: number | null;
      staking_type: number | null;
      staking_minimum: number | null;
      tokens_staked: number | null;
      tokens_staked_percent: number | null;
      real_staking_yield_percent: number | null;
    };
    mining_stats: {
      mining_algo: string;
      network_hash_rate: string;
      available_on_nicehash_percent: number;
      '1_hour_attack_cost': number;
      '24_hours_attack_cost': number;
      attack_appeal: number;
      mining_revenue_native: number;
      mining_revenue_usd: number;
      average_difficulty: number;
    };
    developer_activity: {
      stars: number;
      watchers: number;
      commits_last_3_months: number;
      commits_last_1_year: number;
      lines_added_last_3_months: number;
      lines_added_last_1_year: number;
      lines_deleted_last_3_months: number;
      lines_deleted_last_1_year: number;
    };
    roi_data: {
      percent_change_last_1_week: number;
      percent_change_last_1_month: number;
      percent_change_last_3_months: number;
      percent_change_last_1_year: number;
      percent_change_btc_last_1_week: number;
      percent_change_btc_last_1_month: number;
      percent_change_btc_last_3_months: number;
      percent_change_btc_last_1_year: number;
      percent_change_eth_last_1_week: number;
      percent_change_eth_last_1_month: number;
      percent_change_eth_last_3_months: number;
      percent_change_eth_last_1_year: number;
      percent_change_month_to_date: number;
      percent_change_quarter_to_date: number;
      percent_change_year_to_date: number;
    };
    roi_by_year: {
      [key: string]: number;
    };
    risk_metrics: {
      sharpe_ratios: {
        last_30_days: number;
        last_90_days: number;
        last_1_year: number;
        last_3_years: number;
      };
      volatility_stats: {
        volatility_last_30_days: number;
        volatility_last_90_days: number;
        volatility_last_1_year: number;
        volatility_last_3_years: number;
      };
    };
    misc_data: {
      private_market_price_usd: number | null;
      vladimir_club_cost: number;
      btc_current_normalized_supply_price_usd: number;
      btc_y2050_normalized_supply_price_usd: number;
      asset_created_at: string;
      asset_age_days: number;
      categories: string[];
      sectors: string[];
      tags: string[];
    };
    lend_rates: {
      bitfinex: number;
      blockfi: number;
      celsius: number;
      coinlist: number;
      cryptocom: number;
      poloniex: number;
    };
    borrow_rates: {
      coinlist: number;
    };
    loan_data: {
      originated_last_24_hours_usd: number | null;
      outstanding_debt_usd: number | null;
      repaid_last_24_hours_usd: number | null;
      collateralized_last_24_hours_usd: number | null;
      collateral_liquidated_last_24_hours_usd: number | null;
    };
    reddit: {
      active_user_count: number;
      subscribers: number;
    };
    on_chain_data: {
      txn_count_last_24_hours: number;
      transfer_count_last_24_hours: number;
      txn_volume_last_24_hours_usd: number;
      active_addresses: number;
      total_fees_last_24_hours_usd: number;
      total_fees_last_24_hours: number;
      average_fee_usd: number;
      median_fee_usd: number;
      average_transfer_value_usd: number;
      median_transfer_value_usd: number;
      adjusted_nvt: number;
      issuance_last_24_hours_usd: number;
      issuance_rate: number;
      hash_rate: number;
      blocks_added_last_24_hours: number;
      block_size_bytes_total: number;
      block_size_bytes_average: number;
    };
    exchange_flows: {
      supply_exchange_usd: number;
      flow_in_exchange_native_units_inclusive: number;
      flow_in_exchange_usd_inclusive: number;
      flow_in_exchange_native_units: number;
      flow_in_exchange_usd: number;
      flow_out_exchange_native_units_inclusive: number;
      flow_out_exchange_usd_inclusive: number;
      flow_out_exchange_native_units: number;
      flow_out_exchange_usd: number;
    };
    alert_messages: string | null;
  };
  profile: {
    general: {
      overview: {
        is_verified: boolean;
        tagline: string;
        category: string;
        sector: string;
        tags: string;
        project_details: string;
        official_links: {
          name: string;
          link: string;
        }[];
      };
      background: {
        background_details: string;
        issuing_organizations: string[];
      };
      roadmap: {
        title: string;
        date: string;
        type: number | null;
        details: string;
      }[];
      regulation: {
        regulatory_details: string;
        sfar_score: number;
        sfar_summary: string;
      };
    };
    contributors: {
      individuals: {
        slug: string;
        first_name: string;
        last_name: string;
        title: string;
        description: number | null;
        avatar_url: string;
      }[];
      organizations: {
        slug: string;
        name: string;
        logo: string;
        description: string;
      }[];
    };
    advisors: {
      individuals: {
        slug: string;
        first_name: string;
        last_name: string;
        title: string;
        description: number | null;
        avatar_url: string;
      }[];
      organizations: {
        slug: string;
        name: string;
        logo: string;
        description: string;
      }[];
    };
    investors: {
      individuals: {
        slug: string;
        first_name: string;
        last_name: string;
        title: string;
        description: number | null;
        avatar_url: string;
      }[];
      organizations: {
        slug: string;
        name: string;
        logo: string;
        description: string;
      }[];
    };
    ecosystem: {
      assets: {
        id: string;
        name: string;
      }[];
      organizations: {
        slug: string;
        name: string;
        logo: string;
        description: string;
      }[];
    };
    economics: {
      token: {
        token_name: string;
        token_type: string;
        token_address: number | null;
        block_explorers: {
          name: string;
          link: string;
        }[];
        multitoken: string[];
        token_usage: string;
        token_usage_details: string;
      };
      launch: {
        general: {
          launch_style: string;
          launch_details: string;
        };
        fundraising: {
          sales_rounds: number[];
          sales_documents: string[];
          sales_treasury_accounts: string[];
          treasury_policies: number | null;
          projected_use_of_sales_proceeds: number[];
        };
        initial_distribution: {
          initial_supply: number;
          initial_supply_repartition: {
            allocated_to_investors_percentage: number;
            allocated_to_organization_or_founders_percentage: number;
            allocated_to_premined_rewards_or_airdrops_percentage: number;
          };
          token_distribution_date: number | null;
          genesis_block_date: string;
        };
      };
      consensus_and_emission: {
        supply: {
          supply_curve_details: string;
          general_emission_type: string;
          precise_emission_type: string;
          is_capped_supply: boolean;
          max_supply: number;
        };
        consensus: {
          consensus_details: string;
          general_consensus_mechanism: string;
          precise_consensus_mechanism: string;
          targeted_block_time: number;
          block_reward: number;
          mining_algorithm: string;
          next_halving_date: string;
          is_victim_of_51_percent_attack: boolean;
        };
      };
      native_treasury: {
        accounts: string[];
        treasury_usage_details: string | null;
      };
    };
    technology: {
      overview: {
        technology_details: string;
        client_repositories: {
          name: string;
          link: string;
          license_type: string;
        };
      };
      security: {
        audits: [];
        known_exploits_and_vulnerabilities: {
          title: string;
          date: string;
          type: string;
          details: string;
        }[];
      };
    };
    governance: {
      governance_details: string;
      onchain_governance: {
        onchain_governance_type: number | null;
        onchain_governance_details: number | null;
        is_treasury_decentralized: boolean;
      };
      grants: string[];
    };
    metadata: {
      updated_at: string;
    };
  };
}

export interface IMessari {
  status: {
    elapsed: number;
    timestamp: string;
  };
  data: IMessariData[];
}

export type IMessariTimeserie = [
  number,
  number,
  number,
  number,
  number,
  number
];
export interface IMessariTimeSeries {
  status: {
    elapsed: number;
    timestamp: string;
  };
  data: {
    values: IMessariTimeserie[];
  };
}
