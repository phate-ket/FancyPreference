import React, {Component} from 'react';

class Preference extends Component {

  render() {
    return (
      <div className={'card'}>
        <div className={'form-block'}><h5>Edit Preferences</h5></div>
        <form>
          <div className="row form-block">
            <div className="col-sm-2">Localization</div>
            <div className="form-group col-sm-5">
              <div className="form-group">
                <label htmlFor="lang" className="bold-label">Language</label>
                <select id={'lang'} className="form-control">
                  <option>English</option>
                </select>
                <p className="text-sub">Interested in helping translate Fancy? <a href="#">Let us know.</a></p>
              </div>
              <div className="form-group">
                <label htmlFor="time" className="bold-label">Time zone</label>
                <select id={'time'} className="form-control">
                  <option>(UTC+00:00) UTC</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="currency" className="bold-label">Currency</label>
                <select id={'currency'} className="form-control">
                  <option>U.S. dollars ($)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row form-block">
            <div className="col-sm-2">Privacy</div>
            <div className="form-group col">
              {/*<div className="row">*/}
              <div className="form-group">
                <label className="bold-label">Profile visibility</label><br/>
                <p className="text-sub">Manage who can see your activity, things you fancy, your followers,
                  people you follow or in anyone search result.</p>
                {/*</div>*/}
                {/*<div className="row">*/}
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="vis-1" name="visibility" value="public"
                         checked/>
                  <label htmlFor={'vis-1'} className="custom-control-label">Everyone</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="vis-2" name="visibility" value="private"/>
                  <label htmlFor={'vis-2'} className="custom-control-label">private</label>
                </div>
              </div>
              {/*</div>*/}

              <div className="form-group">
                <label className="bold-label">Messages</label><br/>
                <p className="text-sub">Control who can send you messages.</p>
                {/*</div>*/}
                {/*<div className="row">*/}
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="mes-1" name="message" value="everyone"/>
                  <label htmlFor={'mes-1'} className="custom-control-label">Everyone</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="mes-2" name="message" value="follow"
                         checked/>
                  <label htmlFor={'mes-2'} className="custom-control-label">People you follow</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="mes-3" name="message" value="none"/>
                  <label htmlFor={'mes-3'} className="custom-control-label">No one</label>
                </div>
                <br/>
              </div>
              <div className="form-group">
                <label className="bold-label">Recently viewed</label>
                <p className="text-sub">Manage your fancy browsing history.</p>
                <a href="#">Delete all items</a>
              </div>
            </div>
          </div>
          <div className="row form-block">
            <div className="col-sm-2">Content</div>
            <div className="form-group col">
              {/*<div className="row">*/}
              <label className="bold-label">Category lists</label><br/>
              <p className="text-sub">Automatically add Fancy'd items to category list</p>
              {/*</div>*/}
              {/*<div className="row">*/}
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="cat-1" name="category" value="public" checked/>
                <label htmlFor={'cat-1'} className="custom-control-label">Enable</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="cat-2" name="category" value="private"/>
                <label htmlFor={'cat-2'} className="custom-control-label">Disable</label>
              </div>
              {/*</div>*/}
            </div>
          </div>
          <div className="row form-block" style={{padding: '5px'}}/>
          <div className="row form-block" style={{float: 'right'}}>
            <button type="submit" class="btn btn-primary">Save Preferences</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Preference;