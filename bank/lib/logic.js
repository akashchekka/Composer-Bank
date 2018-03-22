'use strict';
/**
 * Sample transaction
 * @param {test.AccountTransfer} accountTransfer
 * @transaction
 */
function accountTransfer(accountTransfer) {
    if(accountTransfer.from.balance < accountTransfer.amount) {
        throw new error;
    }

    accountTransfer.from.balance -= accountTransfer.amount;
    accountTransfer.to.balance += accountTransfer.amount;

    return getAssetRegistry('test.Account').then(function(assetRegistry) {
        return assetRegistry.updateAll([accountTransfer.from,accountTransfer.to]);
    });
}

/**
 * To deposit amount into a member's account
 * @param {test.Deposit} deposit
 * @transaction
 *
 */
function depositAmount(deposit) {
    
    deposit.Id.balance += deposit.amount;
    
    return getAssetRegistry('test.Account').then(function(assetRegistry) {
        return assetRegistry.update(deposit.Id);
    });
}
/**
 * To withDraw amount from an account
 * @param {test.withDraw} withDraw 
 * @transaction
 */
function withdraw(withDraw) {

    withDraw.Id.balance -= withDraw.amount;

    return getAssetRegistry('test.Account').then(function(assetRegistry) {
        return assetRegistry.update(withDraw.Id);
    });
}

/**
 * To send messages from one account to another account
 * @param {test.message} message
 * @transaction
 */

 function Message(message) {

    message.from.msg = message.msg;
    message.from.status = "sent";

    message.to.msg = message.msg;
    message.to.status = "received";

    return getAssetRegistry('test.Account').then(function(assetRegistry) {
        return assetRegistry.updateAll([message.from,message.to]);
    })
 }

