const defaultTypes = {
  "FeeExchangeV1": {
    "max_payment": "Compact<Balance>"
  },
  "FeeExchange": {
    "_enum": {
      "V1": "Compact<FeeExchangeV1>"
    }
  },
  "Restriction": {
    "_enum": [
      "Transferable"
    ]
  },
  "DclCoinSymbol": {
    "_enum": [
      "USDT",
      "EMC",
      "ELC",
      "ETG"
    ]
  },
  "VipLevelPrice": {
    "amount": "Balance",
    "asset_id": "AssetId"
  },
  "DclAuth": {
    "_enum": [
      "All",
      "AddCoin",
      "Task",
      "None"
    ]
  },
  "VipLevel": {
    "_enum": [
      "Normal",
      "Level1",
      "Level2",
      "Level3",
      "Level4",
      "Level5",
      "Level6"
    ]
  },
  "TxHash": "H256",
  "Deposit": {
    "account_id": "AccountId",
    "tx_hash": "Option<TxHash>",
    "amount": "Balance"
  },
  "Auth": {
    "_enum": [
      "All",
      "Deposit",
      "Withdraw",
      "Refund",
      "Mark"
    ]
  },
  "BlackOrWhite": {
    "_enum": [
      "Black",
      "White"
    ]
  },
  "ExtrinsicIndex": "u32",
  "LineNumber": "u32",
  "AuctionBalance": "Balance",
  "TotalLoanBalance": "Balance",
  "CollateralBalanceAvailable": "Balance",
  "CollateralBalanceOriginal": "Balance",
  "Price": "u128",
  "PriceReport": {
    "reporter": "AccountId",
    "price": "Price"
  },
  "LTV": "u64",
  "LoanId": "u64",
  "LoanPackageId": "u64",
  "PhaseId": "u32",
  "LoanHealth": {
    "_enum": {
      "Well": null,
      "Warning": "LTV",
      "Liquidating": "LTV",
      "Extended": null,
      "Expired": null
    }
  },
  "LoanPackageStatus": {
    "_enum": [
      "Active",
      "Inactive"
    ]
  },
  "Loan": {
    "id": "LoanId",
    "package_id": "LoanPackageId",
    "who": "AccountId",
    "due": "Moment",
    "due_extend": "Moment",
    "collateral_balance_original": "Balance",
    "collateral_balance_available": "Balance",
    "loan_balance_total": "Balance",
    "status": "LoanHealth"
  },
  "LoanPackage": {
    "id": "LoanPackageId",
    "status": "LoanPackageStatus",
    "terms": "u32",
    "min": "Balance",
    "interest_rate_hourly": "u32",
    "collateral_asset_id": "AssetId",
    "loan_asset_id": "AssetId"
  },
  "SharePackage": {
    "terms_total": "u32",
    "terms_left": "u32",
    "per_term": "Balance"
  },
  "ReleaseTrigger": {
    "_enum": {
      "PhaseChange": null,
      "BlockNumber": "BlockNumber"
    }
  },
  "ShareReleasePack": {
    "asset_id": "AssetId",
    "phase_id": "PhaseId",
    "owner": "AccountId",
    "empty": "bool",
    "major": "SharePackage",
    "minor": "Option<SharePackage>",
    "release_trigger": "ReleaseTrigger"
  },
  "PhaseInfo": {
    "id": "PhaseId",
    "quota": "u128",
    "exchange": "u128",
    "iou_asset_id": "Option<u32>"
  },
  "GameWay": "u32",
  "RoundId": "u64",
  "GameControlItem": {
    "paused": "bool",
    "time_stamp": "Moment",
    "duration": "u32",
    "wait_time": "u32"
  },
  "BetItem": {
    "account_id": "AccountId",
    "amount": "Balance",
    "asset_id": "AssetId",
    "is_root": "bool"
  },
  "BetType": {
    "_enum": [
      "Short",
      "Long"
    ]
  },
  "BillingType": {
    "_enum": [
      "Win",
      "Lose",
      "Unchanging"
    ]
  },
  "BetPriceLimit": {
    "min_bet": "Balance",
    "max_bet": "Balance"
  },
  "GameChangeType": {
    "_enum": [
      "Add",
      "Update",
      "Unchanging"
    ]
  },
  "GameWayInfo": {
    "game_way": "GameWay",
    "asset_id": "AssetId",
    "duration": "u32",
    "wait_time": "u32"
  },
  "GameStatusType": {
    "_enum": [
      "Begin",
      "End",
      "Paused",
      "Restart",
      "Unchanging"
    ]
  },
  "RecommendStatusType": {
    "_enum": [
      "Success",
      "Failure",
      "Binded",
      "Unchanging"
    ]
  },
  "ETHAddress": "H160",
  "ETHAuth": {
    "_enum": [
      "All",
      "Create",
      "Deposit",
      "Withdraw",
      "Refund",
      "Mark",
      "KYC"
    ]
  },
  "ERC20Token": {
    "asset_id": "AssetId",
    "contract_addr": "ETHAddress",
    "decimal": "u32",
    "total_supply": "Option<Balance>"
  },
  "ERC20TokenDeposit": {
    "account_id": "AccountId",
    "tx_hash": "Option<TxHash>",
    "amount": "Balance"
  }
}

export default defaultTypes
